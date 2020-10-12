# Peachtree Bank

## Description

This project is a single page application to help users for transferring money and showing the past transactions in a historical transactions list.

## Initialize the application

Make sure you have NodeJs and Angular CLI. if you don't have please check the follows:

[Install NodeJs](https://nodejs.org/en/download/), [Install Angular CLI](https://cli.angular.io/)

Make clone from this project.

```bash
git clone https://github.com/mahmoudshedid/bank-transactions.git
```

Run `npm install` to install all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Application Structure

src--__
    |__
    |__
    common--__
    |      |__
    |      error  `Handle errors`.__
    |__
    |__
    filtering `Filter for 'Recent Transactions'`.__
    |__
    |__
    header `Page Header`.__
    |__
    |__
    modal-box-message `Popup window alert message`.__
    |__
    |__
    models `For all object and serialization`.__
    |__
    |
    pips--__
    |     |__
    |     currency-code.pipe.js `This pip for chose currency code for 'Recent Transactions'`.__
    |__
    |__
    |__
    recent-transactions `Has Filter and Recent Transactions components`.__
    |__
    |
    services `Has all application services`.__
    |__
    |__
    transactions-list `List all 'Recent Transactions' and get new transfer from 'Make a transfer'`.__
    |__
    |__
    transfer `'Make a transfer' component to make new transfer and send to 'Recent Transactions'`.__