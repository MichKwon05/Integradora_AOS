import Server from "./models/server";
import dotenv from 'dotenv';

// Configuración de las variables de ambiente
dotenv.config();

// Iniciar Servidor
const server = new Server();