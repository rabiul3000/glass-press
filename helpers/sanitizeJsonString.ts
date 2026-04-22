function sanitizeJsonString(json: string): string {
    return json
        .replace(/[\u0000-\u001F]+/g, " ")
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/\t/g, "\\t")
        .replace(/\\(?!["\\/bfnrtu])/g, "\\\\");
}

export default sanitizeJsonString;