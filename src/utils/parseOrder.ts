export const parseOrderBy = (orderBy: string) => {
    return orderBy.split(',').map((item) => {
        const [field, dir] = item.split(':');

        return { [field]: dir };
    });
};
