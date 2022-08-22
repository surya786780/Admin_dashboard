var ch = document.getElementById("chart");
var mc = new Chart(ch, {
  type: 'doughnut',
  data: {
    labels: ['Cash', 'Stripe', 'Paypal'],
    datasets: [{
        label: 'cash,stripe,paypal',
        data: [55,25,20],
        backgroundColor: [
            'black',
            '#72D45D',
            '#E69928',
            
        ],
        borderColor: [
            ''
        ],
        borderWidth: 0,
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: false,

  }
});
