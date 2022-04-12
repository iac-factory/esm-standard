// ESM syntax is supported.

const Test = async () => {
    const duration = 5000;
    const $ = async () => await new Promise(async (resolve) => {
        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](duration);

        resolve(true);
    });

    await $();
};

export default (async () => await Test())();
