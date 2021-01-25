import Conf from 'conf';

const config = new Conf();

export const logout = () => {
    config.set("id",null);
    console.log("Successfully logged out!")
}