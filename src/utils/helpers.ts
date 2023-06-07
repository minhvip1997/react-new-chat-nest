import * as bcrypt from 'bcrypt';

export async function hasPassword(rawPassword: string) {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(rawPassword, salt);
}

export async function comparehash(rawPassword: string, hashedPassword: string){
  return bcrypt.compare(rawPassword, hashedPassword);
}
