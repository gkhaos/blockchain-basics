App = {
  web3Provider: null,
  contracts: {},

  init: async function () {
    // Load pets.
    $.getJSON('../pets.json', function (data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function () {
    /*
     * Replace me...
     */

    /* Provide a way to connect to the blockchain */

    // Modern dapp browsers/Recent versions of MetaMask
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });;
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }

    // Legacy dapp browsers/Older versions of MetaMask
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }

    // ONLY FOR DEVELOPMENT PURPOSES (inseure)
    // If no injected web3 instance is detected, fall back to HTTP
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }

    /* Create Web3-Client  */
    web3 = new Web3(App.web3Provider);
    /*
     * ...done
     */

    return App.initContract();
  },

  initContract: function () {
    /*
     * Replace me...
     */

    /* Parse the compiled Smart Contract (after migration!) */

    $.getJSON('Adoption.json', function (data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var AdoptionArtifact = data;
      App.contracts.Adoption = TruffleContract(AdoptionArtifact);

      // Set the provider for our contract
      App.contracts.Adoption.setProvider(App.web3Provider);

      // Use our contract to retrieve and mark the adopted pets
      return App.markAdopted();
    });

    /*
     * ...done
     */

    return App.bindEvents();
  },

  bindEvents: function () {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function () {
    /*
     * Replace me...
     */

    /* Invoke `getAdopters` and mark all adopted pets */

    var adoptionInstance;

    // Retrieve Smart Contract instance
    App.contracts.Adoption.deployed().then(function (instance) {
      adoptionInstance = instance;
      // as `getAdopters` has the `view` modifier, function is called using `call`
      return adoptionInstance.getAdopters.call();
    })
    // Mark the adopted pets
    .then(function (adopters) {
      for (i = 0; i < adopters.length; i++) {
        if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
          $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
        }
      }
    })
    
    .catch(function (err) {
      console.log(err.message);
    });

    /*
     * ...done
     */
  },

  handleAdopt: function (event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */

    /* Invoke `adopt(petId)` */

    var adoptionInstance;

    // `adopt` changes the state of the Smart Contract
    // therefore a transaction has to be send, which
    // has to be signed "by an account" (private-key)
    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }

      // Use default account
      var account = accounts[0];

    // Retrieve Smart Contract instance
      App.contracts.Adoption.deployed().then(function (instance) {
        adoptionInstance = instance;

        // Invoke `adopt` by sending a transaction
        // In some libraries there is a `send` method in 
        // contrast to `call`
        return adoptionInstance.adopt(petId, { from: account });
      })
      // Mark the adopted pet as adopted
      .then(function (result) {
        return App.markAdopted();
      })
      
      .catch(function (err) {
        console.log(err.message);
      });
    });
    /*
     * ...done
     */
  }

};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
