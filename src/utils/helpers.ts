import * as bcrypt from 'bcrypt';

export async function hasPassword(rawPassword: string) {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(rawPassword, salt);
}
