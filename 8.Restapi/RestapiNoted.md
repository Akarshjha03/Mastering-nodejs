# 📘 REST API Notes

---

## 1. Client–Server Independence
- REST (Representational State Transfer) is based on the idea that **client and server should be independent** of each other.  
- This means:
  - The **client** (browser, mobile app, etc.) is responsible only for **UI/UX and presentation**.
  - The **server** (backend) is responsible only for **data processing, storage, and business logic**.
- Benefits:
  - Loose coupling → front-end and back-end can evolve independently.
  - Allows scaling (e.g., multiple clients can talk to the same server).
  - Enables flexibility in **rendering approaches**:
    - **SSR (Server-Side Rendering):** Server renders HTML (e.g., old PHP apps, Next.js with SSR).
    - **CSR (Client-Side Rendering):** Client renders UI after fetching JSON data from API (e.g., React, Angular).
    - **Hybrid Rendering:** We should create 2 routes like /users for web access for SSR and /api/users for CRS(Mobile apps, smartswatches, alexa..etc).

---

## 2. Correct Use of HTTP Methods
REST APIs rely on standard HTTP verbs. Each verb has a specific purpose:

| **Method** | **Usage in REST** | **Example** |
|------------|-------------------|-------------|
| **GET**    | Fetch **data** (should not change server state). | `GET /users` → returns list of users |
| **POST**   | Create a **new resource** (submit data). | `POST /users` with JSON body → creates a user |
| **PUT**    | Update/replace an **existing resource** (idempotent). | `PUT /users/123` with JSON body → replaces user 123 |
| **PATCH**  | Partially update an existing resource. | `PATCH /users/123` with `{ "email": "new@mail.com" }` |
| **DELETE** | Remove a resource. | `DELETE /users/123` → deletes user 123 |

👉 **Rule:**  
- Do **not** misuse methods:
  - Don’t use `GET` to update data.  
  - Don’t use `POST` for fetching.  
  - Each method should follow its **intended purpose** for clarity and consistency.

---

## 3. Other REST API Design Rules (Good Practice)

### 🔹 Statelessness
- Each request must contain all information (headers, tokens, body).  
- Server should not rely on "session memory".

### 🔹 Resource-based URIs
- Use **nouns, not verbs** in endpoints.  
  - ✅ `/users/123` (good)  
  - ❌ `/getUser?id=123` (bad, not RESTful)

### 🔹 Uniform Interface
- API should behave consistently for all resources (e.g., same error format, pagination style).

### 🔹 Cacheable
- Responses should define caching rules (important for scalability).

---

## ✅ Summary
1. **Client–Server Independence** → Client handles UI, server handles business logic.  
2. **HTTP Methods** → Follow correct usage (GET → read, POST → create, PUT/PATCH → update, DELETE → delete).  
3. **Best Practices** → Stateless, resource-based URIs, uniform interface, cacheable.  

---
