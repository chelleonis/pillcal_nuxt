export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
        user: null as any
    }),

    actions: {
        async login(username: string, password: string) {
            
        }
    }
})