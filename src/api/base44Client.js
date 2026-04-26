// Mock db object to satisfy imports
const db = { 
  auth: { 
    isAuthenticated: () => false, 
    me: async () => null,
    logout: () => {},
    redirectToLogin: () => {}
  }, 
  entities: {}, 
  integrations: { Core: { UploadFile: async () => ({ file_url: '' }) } } 
};

export const base44 = db;

// This fixes the "not exported" error in your GitHub Actions
export const createAxiosClient = ({ baseURL, headers = {}, token = null }) => {
  return {
    get: async () => ({ data: {} }),
    post: async () => ({ data: {} }),
    put: async () => ({ data: {} }),
    delete: async () => ({ data: {} })
  };
};

export default db;
