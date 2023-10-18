# X (formerly Twitter) Post CRUD API Case Study

This is a case study that demonstrates the creation of a CRUD (Create, Read, Update, Delete) API for posts (tweets) from X (formerly Twitter). The API is designed to handle posts with specific parameters, including text, URL, hashtags, via, and related. [Postman API](https://api.postman.com/collections/28050350-f17473ac-792b-4e6c-9c7e-79d2816abed0?access_key=PMAT-01HD1Y44390QY4GFHFEJ4A34ZK)

## Table of Contents
- [Introduction](#introduction)
- [API Endpoints](#api-endpoints)
- [Parameters](#parameters)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Examples](#examples)

## Introduction

In this case study, I aim to replicate the functionality of posting and managing tweets on the X platform. The API allows users to perform the following operations:

- **Create:** Post a new tweet with text, a URL, hashtags, a "via" source, and related content.
- **Read:** Retrieve tweets by their unique IDs or search for tweets using specific criteria.
- **Update:** Edit the content of an existing tweet.
- **Delete:** Remove a tweet from the platform.

This case study leverages the reference parameters provided by [X's developer documentation](https://developer.x.com/) to maintain consistency with the platform's standards.

## API Endpoints

The following API endpoints are available:

- `POST /v1/posts`: Create a new tweet.
- `GET /v1/posts`: Retrieve all tweets.
- `GET /v1/posts/:id`: Retrieve a tweet by its unique ID.
- `PUT /v1/posts/:id`: Update an existing tweet.
- `DELETE /v1/posts/:id`: Delete a tweet.

## Parameters

### Post (Tweet) Content Parameters

1. `text` (string)(required): The main content of the tweet.
2. `url` (string): A URL or link associated with the tweet.
3. `hashtags` (array of strings): An array of hashtags used in the tweet.
4. `via` (string): The source or platform from which the tweet is posted.
5. `related` (array of strings): An array of related content or users.

## Getting Started

To set up and run this CRUD API, you will need the following:

1. Node.js and npm installed.
2. .env files (see .env.example)
3. A database system (e.g., MongoDB) to store tweet data.
4. API development tools (e.g., Postman).

To get started, clone this repository and install the required dependencies:

```bash
npm install
npm start
```

## Usage

To use these API, make HTTP requests to the defined endpoints with the valid parameters. Ensure that your requests following reference parameter to maintain compatibility with X's post (tweet) structure.

## Examples

### Retrieve a Post

```http
GET http://localhost:7070/v1/posts
```

### Create A New Post

```http
POST http://localhost:7070/v1/posts

{
    "text": "Agar silaturahmi tidak terputus pinjam dulu seratus",
    "via": "UGM_FESS"
}
```

![Alt text](image.png)