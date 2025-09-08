# Notes on HTTP Status Codes

## What are Status Codes?

3-digit numbers returned by the server in an HTTP response.

Indicate the result of a request (success, failure, redirection, error, etc.).

First digit defines category.

## Categories of Status Codes

### 1xx – Informational

Request received, server still processing.

Rarely used in practice.

Examples:

100 Continue → Client should continue sending request body.

101 Switching Protocols → Server switching to a different protocol (e.g., WebSocket).

👉 Analogy: Mall receptionist says, “We got your request, please wait.”

### 2xx – Success

Request was successful.

Examples:

200 OK → Standard success.

201 Created → Resource successfully created.

202 Accepted → Request accepted but still processing.

204 No Content → Success, but nothing to return.

👉 Analogy: Mall says, “Your purchase is successful, here’s your item.”

### 3xx – Redirection

Further action needed → client redirected.

Examples:

301 Moved Permanently → Resource permanently moved to a new URL.

302 Found → Temporary redirect.

304 Not Modified → Cached version is still valid, no need to re-download.

👉 Analogy: Mall says, “That shop has moved upstairs, go there instead.”

### 4xx – Client Errors

Problem on the client’s side.

Examples:

400 Bad Request → Invalid syntax.

401 Unauthorized → Missing/invalid authentication.

403 Forbidden → Authenticated but not allowed.

404 Not Found → Resource not found.

405 Method Not Allowed → Wrong HTTP method used (e.g., POST instead of GET).

429 Too Many Requests → Rate limiting.

👉 Analogy: Mall says, “You didn’t fill the form correctly” (400) or “You don’t have access to the VIP lounge” (403).

### 5xx – Server Errors

Problem on the server’s side.

Examples:

500 Internal Server Error → Generic server crash/error.

502 Bad Gateway → Server received invalid response from another server.

503 Service Unavailable → Server is down/overloaded.

504 Gateway Timeout → Another server took too long to respond.

👉 Analogy: Mall says, “Our payment system is down, come back later.”

## Commonly Used Status Codes (Quick Reference)

| Code | Meaning | When Used |
| --- | --- | --- |
| 200 OK | Success | GET request successful |
| 201 Created | Resource created | POST → new user added |
| 204 No Content | Success but empty | DELETE request |
| 301 Moved Permanently | Resource moved | Redirect |
| 302 Found | Temporary redirect | Login redirect |
| 304 Not Modified | Cached content valid | Browser cache |
| 400 Bad Request | Invalid request | Missing data, bad syntax |
| 401 Unauthorized | Not logged in | Missing token |
| 403 Forbidden | Access denied | Logged in, but no permission |
| 404 Not Found | Resource missing | Wrong URL |
| 405 Method Not Allowed | Wrong HTTP method | GET instead of POST |
| 429 Too Many Requests | Rate limit exceeded | API abuse |
| 500 Internal Server Error | Generic error | Server crash |
| 502 Bad Gateway | Bad response from upstream server | Reverse proxy issue |
| 503 Service Unavailable | Server overloaded/down | Maintenance |
| 504 Gateway Timeout | Upstream server timeout | Slow microservice |

## Quick Memory Trick

1xx → “Wait”

2xx → “Here you go”

3xx → “Go elsewhere”

4xx → “You messed up”

5xx → “We messed up”

## Summary
HTTP status codes = server’s way of telling client what happened.
They help debug and handle requests correctly.

### Documentation
[Refrence](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
