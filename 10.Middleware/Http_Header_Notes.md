# 📘 Notes on HTTP Headers

## 🔹 What are HTTP Headers?

Metadata sent along with HTTP requests & responses.

Provide additional info about request/response like format, length, authentication, caching, etc.

Structure:

```txt
Header-Name: Header-Value
```

Example:

```txt
Content-Type: application/json
Authorization: Bearer <token>
```

## 🔹 Types of HTTP Headers

### 1. General Headers
Apply to both requests and responses (not related to content itself).

Examples:
- **Date**: Time when the message was sent.
- **Connection**: Control whether to keep connection alive (keep-alive) or close.
- **Cache-Control**: Instructions for caching.

👉 Analogy: General mall rules (open hours, whether re-entry is allowed).

### 2. Request Headers
Sent by the client (browser/app) → provide info about the request or the client itself.

Examples:
- **Host**: Domain name of the server (www.example.com).
- **User-Agent**: Info about client (browser, OS, app).
- **Accept**: Types of content client can handle (text/html, application/json).
- **Authorization**: Credentials for authentication.
- **Cookie**: Stored cookies sent back to server.

👉 Analogy: Visitor telling the mall gatekeeper — “I’m from Chrome on Windows, I prefer JSON, here’s my ID card (token).”

### 3. Response Headers
Sent by the server → provide extra info about server or resource.

Examples:
- **Server**: Info about the server (nginx, Apache).
- **Set-Cookie**: Send cookies to the client.
- **Access-Control-Allow-Origin**: Defines allowed origins for CORS.
- **Location**: Used for redirects.

👉 Analogy: Mall replying to the visitor — “Here’s a coupon (cookie), and by the way, I’m managed by Nginx.”

### 4. Entity Headers (Representation Headers)
Provide details about the body/content of request or response.

Examples:
- **Content-Type**: MIME type of the body (application/json, text/html).
- **Content-Length**: Size of the body in bytes.
- **Content-Encoding**: How content is encoded (gzip, deflate).
- **Last-Modified**: When resource was last changed.
- **ETag**: Unique identifier for a specific version of resource.

👉 Analogy: Labels on a mall purchase — “This is a JSON file, size 2MB, compressed with gzip.”

## 🔹 Commonly Used Headers (Quick Reference)

| Header | Purpose |
| --- | --- |
| Content-Type | Tells format of data (application/json) |
| Authorization | Sends credentials/token |
| Accept | Client’s acceptable formats |
| Cache-Control | Controls caching (no-cache, max-age=3600) |
| Set-Cookie | Server sends cookie to client |
| Cookie | Client sends cookie back |
| User-Agent | Info about client app/browser |
| Location | Redirect location |
| Access-Control-Allow-Origin | CORS control |
| ETag | Resource version (used for caching) |

## 🔹 Security-related Headers

- **Strict-Transport-Security**: Force HTTPS.
- **X-Frame-Options**: Prevent clickjacking.
- **X-Content-Type-Options**: Prevent MIME sniffing.
- **Content-Security-Policy (CSP)**: Prevent XSS by restricting scripts.

👉 These are like mall security rules ensuring safety of customers.

## 🔹 Lifecycle of Headers

- Client Request → Includes Request Headers.
- Server Response → Includes Response + Entity Headers.
- Both sides use General Headers for control.

## ✅ In summary
HTTP headers = “extra instructions & metadata” for communication between client and server.
They help in formatting, authentication, caching, redirection, and security.

### Testing the header
[Watch the video](https://youtu.be/mhg3Vwsb88M?si=lfBonhEb8qOt-tq_)
