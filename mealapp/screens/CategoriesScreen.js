import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGrid';

const renderCategoryItem = (itemData) => {
    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.title}
        />
    );
};

const CategoryScreen = () => {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
};

export default CategoryScreen;
