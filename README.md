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

src--<br />
<space><space><space><space>|<br />
<space><space><space><space>|<br />
<space><space><space><space>common--<br />
<space><space><space><space>|<space><space>|<br />
<space><space><space><space>|&nbsp;error  `Handle errors`.<br />
<space><space><space><space>|<br />
<space><space><space><space>|<br />
<space><space><space><space>filtering `Filter for 'Recent Transactions'`.<br />
<space><space><space><space>|<br />
<space><space><space><space>|<br />
<space><space><space><space>header `Page Header`.<br />
<space><space><space><space>|<br />
<space><space><space><space>|<br />
<space><space><space><space>modal-box-message `Popup window alert message`.<br />
<space><space><space><space>|<br />
<space><space><space><space>|<br />
<space><space><space><space>models `For all object and serialization`.<br />
<space><space><space><space>|<br />
<space><space><space><space>|
<space><space><space><space>pips--<br />
<space><space><space><space>|<space><space>|<br />
<space><space><space><space>|&nbsp;currency-code.pipe.js `This pip for chose currency code for 'Recent Transactions'`.<br />
<space><space><space><space>|<br />
<space><space><space><space>|<br />
<space><space><space><space>|<br />
<space><space><space><space>recent-transactions `Has Filter and Recent Transactions components`.<br />
<space><space><space><space>|<br />
<space><space><space><space>|
<space><space><space><space>services `Has all application services`.<br />
<space><space><space><space>|<br />
<space><space><space><space>|<br />
<space><space><space><space>transactions-list `List all 'Recent Transactions' and get new transfer from 'Make a transfer'`.<br />
<space><space><space><space>|<br />
<space><space><space><space>|<br />
<space><space><space><space>transfer `'Make a transfer' component to make new transfer and send to 'Recent Transactions'`.<br />