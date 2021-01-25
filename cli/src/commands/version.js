import { version as packageVersion } from '../../package.json';
export const version = (args) => {
    console.log("version:",packageVersion);
}