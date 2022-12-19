export const getEndCommandIndex = (data) => {
    const [indexOfSpace, indexOfTab] = [data.indexOf(' '), data.indexOf('\t')];

    if (indexOfSpace === -1 && indexOfTab === -1) {
        return;
    }

    if (indexOfSpace !== -1 && indexOfTab === -1) {
        return indexOfSpace;
    }

    if (indexOfTab !== -1 && indexOfSpace === -1) {
        return indexOfTab;
    }

    return indexOfSpace < indexOfTab ? indexOfSpace : indexOfTab;
}
