import jwt from 'jsonwebtoken';
import './env';

export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 1000000 });
export const signOutToken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 0 });
