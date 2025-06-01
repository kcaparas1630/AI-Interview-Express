const isPasswordValid = (password: string): boolean => {
    // check if password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }
    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }
    // Check if password contains at least one special character
    if (!/[!@#$%^&*]/.test(password)) {
        return false;
    }
    // Check if password contains at least one numeric character
    if (!/[0-9]/.test(password)) {
        return false;
    }
    return true;
}

export default isPasswordValid;
