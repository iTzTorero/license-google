export interface licencePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
