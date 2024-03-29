import { useNavigation, useRoute } from '@react-navigation/native';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../../Theme/Colors';
import store from 'App/Stores/index';
import { add_product } from 'App/Stores/Cart/index';
import { callAPI } from 'App/Shared/API';
import { useSelector } from 'react-redux';
export default function BuyAction({ product }) {

  const shop = product.shop;
  const navigation = useNavigation();
  const user = useSelector(state => state.user.user);
  const goCart = () => {
    const add_cart_action = add_product(product)
    store.dispatch(add_cart_action);
    navigation.navigate('Cart')
  };

  const navigate = {
    goChatWithProduct: (conversation) => navigation.navigate('Chats', {
      screen: 'ChatRoom',
      params: {
        conversation,
        product
      }
    }),

    goToLogin: () => navigation.navigate('Auth', {
      screen: "Index",
      params: {
        message: 'Vui lòng đăng nhập để tiếp tục'
      }
    }
    ),
  }

  const goChat = async () => {
    if (user) {
      const response = await callAPI('conversation/get-conversation', 'get', {
        user_id: user._id,
        shop_id: shop._id
      })
      navigate.goChatWithProduct(response.data)
    } else navigate.goToLogin();
  }

  const goOrder = () => {
    const add_cart_action = add_product(product)
    store.dispatch(add_cart_action);
    navigation.navigate('Cart')
  }

  return (<>
    <View style={style.container}>
      <View style={{ overflow: 'hidden', flexDirection: 'row' }}>
        <TouchableArea style={style.buyButton} onPress={goOrder}>
          <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}> Xem Giỏ Hàng </Text>
        </TouchableArea>
        <View style={[Helpers.flexRow, { width: ScreenWidth / 2, justifyContent: 'space-around', backgroundColor: Colors.lynxWhite }]}>
          <TouchableArea onPress={goCart} style={[Helpers.flexColumn]}>
            <Icon name="shopping-cart" style={style.rightButton} />
            <Text style={style.rightButtonText}> Thêm vào giỏ</Text>
          </TouchableArea>
          <TouchableArea onPress={goChat} style={[Helpers.flexColumn]}>
            <Icon name="message-circle" style={style.rightButton} />
            <Text style={style.rightButtonText}> Liên Hệ</Text>
          </TouchableArea>
        </View>
      </View>
    </View>
  </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // backgroundColor: '#dae0e670',
    width: ScreenWidth,
    // height: 60,
    borderRadius: 3,
    // paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  buyButton: {
    backgroundColor: Colors.mathPurple,
    width: ScreenWidth / 2,
    height: '100%',
    padding: 10,
    paddingVertical: 15
  },
  backButton: {
    color: Colors.redOrange,
    fontSize: 24,
    // marginLeft: 10
  },
  rightButton: {
    color: Colors.magazineBlue,
    fontSize: 20,
  },
  rightButtonText: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.magazineBlue,
  }
})