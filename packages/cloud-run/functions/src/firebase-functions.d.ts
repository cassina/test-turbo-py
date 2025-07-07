declare module "firebase-functions/v2" {
  export function onRequest(handler: (req: any, res: any) => any): any;
}
