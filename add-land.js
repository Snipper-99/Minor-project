// State Codes
const stateCodes = {

    Maharashtra: "MH",
    Gujarat: "GJ",
    Karnataka: "KA",
    Delhi: "DL",
    Rajasthan: "RJ",
    Goa: "GA"

};


// District Codes
const districtCodes = {

    Pune: "PUN",
    Mumbai: "MUM",
    Nashik: "NAS",
    Ahmedabad: "AHM",
    Surat: "SUR",
    Bengaluru: "BLR",
    Jaipur: "JAI",
    Panaji: "PAN"

};


// Form submit
document.getElementById("landForm").addEventListener(
    "submit",
    function(event) {

        // Stop page from refreshing
        event.preventDefault();


        // Get selected values
        let state =
            document.getElementById("state").value;

        let district =
            document.getElementById("district").value;


        // Get codes
        let stateCode = stateCodes[state];

        let districtCode = districtCodes[district];


        // Check codes
        if (!stateCode || !districtCode) {

            alert("Please select a valid State and District.");

            return;
        }


        // Create storage key
        let locationKey =
            stateCode + "-" + districtCode;


        // Get previous number
        let previousNumber =
            localStorage.getItem(locationKey);


        // First registration
        if (previousNumber === null) {

            previousNumber = 1;

        }

        // Next registration
        else {

            previousNumber =
                Number(previousNumber) + 1;

        }


        // Convert 1 → 0001
        let landNumber =
            String(previousNumber).padStart(4, "0");


        // Create Land ID
        let landID =
            "LUN-" +
            stateCode +
            "-" +
            districtCode +
            "-" +
            landNumber;


        // Save number
        localStorage.setItem(
            locationKey,
            previousNumber
        );


        // Show result
        document.getElementById("result").innerHTML = `

            <h2>✓ Land Registered Successfully 🎉</h2>

            <p>Your Land ID 🥳</p>

            <h3>${landID}</h3>

        `;

    }
);