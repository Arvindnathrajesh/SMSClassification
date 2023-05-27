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

2. i/p:
```bash
[
    {
        "time": "21-12-2021",
        "sender": "GROCERY-STORE",
        "text": "Rs.500.75 is the total amount of your purchase. Thank you for shopping with us!"
    },
    {
        "time": "26-12-2021",
        "sender": "ONLINE-SHOP",
        "text": "Rs.800.50 is debited from your account for your recent online purchase. Thank you for shopping with us!"
    },
    {
        "time": "25-12-2021",
        "sender": "TRAVEL-AGENCY",
        "text": "Rs.5,000.25 is the total fare for your upcoming flight. Have a pleasant journey!"
    }
]
```
o/p:
```bash
{
    "summary": [
        {
            "category": "Shopping",
            "totalAmount": "1301.25",
            "smsArray": [
                {
                    "time": "21-12-2021",
                    "sender": "GROCERY-STORE",
                    "text": "Rs.500.75 is the total amount of your purchase. Thank you for shopping with us!"
                },
                {
                    "time": "26-12-2021",
                    "sender": "ONLINE-SHOP",
                    "text": "Rs.800.50 is debited from your account for your recent online purchase. Thank you for shopping with us!"
                }
            ]
        },
        {
            "category": "Travel",
            "totalAmount": "5,000.25",
            "smsArray": [
                {
                    "time": "25-12-2021",
                    "sender": "TRAVEL-AGENCY",
                    "text": "Rs.5,000.25 is the total fare for your upcoming flight. Have a pleasant journey!"
                }
            ]
        }
    ]
}
```

## Stay in touch
- Author - [Arvind Nath Rajesh](https://arvindnathr@gmail.com)

