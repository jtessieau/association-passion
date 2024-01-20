function sanitizeString(userProvidedString: string) {
    return userProvidedString.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export {sanitizeString}