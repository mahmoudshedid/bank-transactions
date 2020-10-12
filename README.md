# Peachtree Bank

## Description

This project is a single page application to help users in transferring money and showing the past transactions within historical transactions list.

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

src__<br />
>>|<br />
>>|<br />
>>common__<br />
>>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
>>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|error  `Handle errors`.<br />
>>|<br />
>>|<br />
>>filtering `Filter for 'Recent Transactions'`.<br />
>>|<br />
>>|<br />
>>header `Page Header`.<br />
>>|<br />
>>|<br />
>>modal-box-message `Popup window alert message`.<br />
>>|<br />
>>|<br />
>>models `For all object and serialization`.<br />
>>|<br />
>>|
>>pips__<br />
>>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
>>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|currency-code.pipe.js `This pip for choose currency code for 'Recent Transactions'`.<br />
>>|<br />
>>|<br />
>>|<br />
>>recent-transactions `Has 'Filter' and 'Recent Transactions' components`.<br />
>>|<br />
>>|
>>services `Has all application services`.<br />
>>|<br />
>>|<br />
>>transactions-list `List all 'Recent Transactions' and get new transfer from 'Make a transfer' by`.<br />
>>|<br />
>>|<br />
>>transfer `'Make a transfer' component to make new transfer and send to 'Recent Transactions'`.<br />