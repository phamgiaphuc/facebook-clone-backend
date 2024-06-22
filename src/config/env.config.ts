export default (): Record<string, unknown> => ({
  port: parseInt(process.env.PORT, 10) || 3000,
});
