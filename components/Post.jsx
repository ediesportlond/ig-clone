import { Text, Avatar } from '@rneui/themed';
import { View, ActivityIndicator, Image } from 'react-native';
import styles from '../styles';

export default function Post({ post }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Avatar rounded source={{ uri: post.profilePhoto }} />
                <Text style={styles.username}>{post.userName}</Text>
            </View>
            <Image source={{ uri: post.photoURL }} style={styles.image}
                PlaceholderContent={<ActivityIndicator />} />{/* Puts spinning icon while loading */}
            <Text style={styles.description}>
                {post.description}
            </Text>
        </View>
    )
}