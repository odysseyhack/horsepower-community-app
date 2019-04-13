## Horse Power - Community Management Tool

This repo contains the frontend which, for the demo purposes, will be used for entering the user preferences. It connects to the backend metadata service at the repo [here](https://github.com/odysseyhack/horsepower-community-backend). 

The `contracts` folder contains the smart contracts which would be deployed on the Ethereum-based side-chain (Loom Network) and introduce a debt token called VATT (Virtual AuTomobile Token) controlled by the `Community` contract.

The forecasting service mentioned [here](https://github.com/odysseyhack/horsepower_forecasting) will make the predictions based on the overall energy pattern of the grid and individual preferences saved by this app. Once there exists a new forecast, it will trigger another service to let the car know that it can charge/discharge at a given time. This service will, in turn, trigger the blockchain transactions.