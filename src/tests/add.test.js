const add = (a, b) => a + b;
const generateGreetings = (name) => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});
    
test('should generate greetings from name', () => {
    const result = generateGreetings('TESTE');
    expect(result).toBe('Hello TESTE');
});