const jwt = require('jsonwebtoken');
require('dotenv').config();


const tokenKey = process.env.TOKEN_PRIVATE_KEY;

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log('Authorization Header:', authHeader); // Ajout d'un log pour vérifier l'en-tête
    if (!authHeader) {
        return res.status(401).json({ error: 'Token not provided' });
    }
    
    try {
        const token = authHeader.split(' ')[1];
        console.log('Token reçu:', token); // Ajout d'un log pour vérifier le token
        const decodedToken = jwt.verify(token, tokenKey);
        req.auth = { userId: decodedToken.userId };
        next();
    } catch (error) {
        console.error('Erreur de vérification du token:', error);
        res.status(401).json({ error: 'Invalid token' });
    }
};
