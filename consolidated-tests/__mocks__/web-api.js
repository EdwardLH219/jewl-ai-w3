// Web API mocks for testing
global.Headers = class Headers {
  constructor(init) {
    this.headers = {};
    if (init) {
      if (typeof init === 'object') {
        Object.entries(init).forEach(([key, value]) => {
          this.headers[key.toLowerCase()] = value;
        });
      }
    }
  }

  append(name, value) {
    this.headers[name.toLowerCase()] = value;
  }

  delete(name) {
    delete this.headers[name.toLowerCase()];
  }

  get(name) {
    return this.headers[name.toLowerCase()] || null;
  }

  has(name) {
    return name.toLowerCase() in this.headers;
  }

  set(name, value) {
    this.headers[name.toLowerCase()] = value;
  }

  forEach(callback) {
    Object.entries(this.headers).forEach(([key, value]) => {
      callback(value, key, this);
    });
  }
};

global.Request = class Request {
  constructor(input, init = {}) {
    this.url = typeof input === 'string' ? input : input.url;
    this.method = init.method || 'GET';
    this.headers = new Headers(init.headers || {});
    this.body = init.body || null;
    this.credentials = init.credentials || 'same-origin';
    this.mode = init.mode || 'cors';
    this.signal = init.signal || null;
    this.redirect = init.redirect || 'follow';
    this.referrer = init.referrer || 'about:client';
    this.integrity = init.integrity || '';
  }

  clone() {
    return new Request(this.url, {
      method: this.method,
      headers: this.headers,
      body: this.body,
      mode: this.mode,
      credentials: this.credentials,
      redirect: this.redirect,
      referrer: this.referrer,
      integrity: this.integrity,
      signal: this.signal
    });
  }
};

global.Response = class Response {
  constructor(body = null, init = {}) {
    this.body = body;
    this.status = init.status || 200;
    this.statusText = init.statusText || '';
    this.headers = new Headers(init.headers || {});
    this.type = 'default';
    this.url = '';
    this.ok = this.status >= 200 && this.status < 300;
    this.redirected = false;
  }

  clone() {
    return new Response(this.body, {
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
    });
  }

  async text() {
    return this.body ? String(this.body) : '';
  }

  async json() {
    const text = await this.text();
    return text ? JSON.parse(text) : null;
  }
};

// Add fetch implementation if needed
if (typeof global.fetch !== 'function') {
  global.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve(new Response(JSON.stringify({ data: 'mocked data' }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }))
  );
} 