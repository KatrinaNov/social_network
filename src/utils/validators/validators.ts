export const required = (value: string) => {
  if (value) return undefined;
  return 'Field is required'
}
export const maxLength = (max: number) => (value: string) => {
  return value && value.length > max ? `Max length is ${max} symbols` : undefined;
}