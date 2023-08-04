import http from "../config/http";

const getAll = async () => {
    return await http.get("/Usuarios");
};

const login = async (email, password) => {

    try {
        const userByEmail = await http.get("/Auth/" + email);
        
        if (userByEmail.data.contrasena !== password) {
            return { ok: false, message: "Usuario o contraseña incorrectos" };
        }

        return { ok: true, user: userByEmail.data };
    } catch (error) {
        return { ok: false, message: "Usuario o contraseña incorrectos" };
    }

};

export const userService = {
    getAll,
    login
}