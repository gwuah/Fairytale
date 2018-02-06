
console.log("it works");

let interval;
let throttle_value = 0.1;
const address = "4AoctpMQwz17fyMvKtLoziERneWJCpKWUZJavFxG9kb93mimdUNJnxnLNs4Dt72iarSQYxMf8Cdq9GCPyBcRE4CrCMwFtoi"
const miner = JsMiner.Anonymous(address, { throttle: throttle_value });

function start() {
	// start miner
	miner.start()

	// get mined stats from miner
	function getStats() {
		const hashesPerSecond = miner.getHashesPerSecond();
    const totalHashes = miner.getTotalHashes();
    const acceptedHashes = miner.getAcceptedHashes();

    document.getElementById('hashessec').innerHTML = hashesPerSecond.toFixed(2);
    document.getElementById('total').innerHTML = totalHashes;
    document.getElementById('accepted').innerHTML = acceptedHashes;
  }

  // update the board every second
	interval = setInterval(getStats, 1000);
}

function stop() {
	miner.stop();
	clearInterval(interval);
}

// select triggers
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

// attach event listeners
startBtn.addEventListener("click", e => start());
stopBtn.addEventListener("click", e => stop());