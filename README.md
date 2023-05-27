<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

<b><em><u>SMS Classification</u> :</b></em>

This Application is built on NestJS framework

## Installation

```bash
=> clone this repo.
=> make sure node and npm is installed.
```

## Running the app

```bash

=> npm i

=> npm run start:dev

=> just hit the API at http://localhost:3000/sms/classify : POST menthod , with the required JSON body

```
## Sample inputs and outputs
1. i/p:
```bash
[
    {
        "time": "17-12-2021",
        "sender": "MakeMyTrip",
        "text": "Booking confirmation: Flight from Mumbai to Delhi on 18-12-21. Fare: Rs.3,000.00. Have a pleasant journey!"
    },
    {
        "time": "17-12-2021",
        "sender": "Swiggy",
        "text": "Swiggy Order: Rs.400.00 is debited from your bank account. Enjoy your food!"
    },
    {
        "time": "16-12-2021",
        "sender": "Zomato",
        "text": "Zomato Order #123456: Rs.500.00 is debited from your bank account. Enjoy your meal!"
    }
]
```
o/p
```bash 
{
    "summary": [
        {
            "category": "Travel",
            "totalAmount": "3,000.00",
            "smsArray": [
                {
                    "time": "17-12-2021",
                    "sender": "MakeMyTrip",
                    "text": "Booking confirmation: Flight from Mumbai to Delhi on 18-12-21. Fare: Rs.3,000.00. Have a pleasant journey!"
                }
            ]
        },
        {
            "category": "Food",
            "totalAmount": "900.00",
            "smsArray": [
                {
                    "time": "17-12-2021",
                    "sender": "Swiggy",
                    "text": "Swiggy Order: Rs.400.00 is debited from your bank account. Enjoy your food!"
                },
                {
                    "time": "16-12-2021",
                    "sender": "Zomato",
                    "text": "Zomato Order #123456: Rs.500.00 is debited from your bank account. Enjoy your meal!"
                }
            ]
        }
    ]
}
```

## Stay in touch
- Author - [Arvind Nath Rajesh](https://arvindnathr@gmail.com)

