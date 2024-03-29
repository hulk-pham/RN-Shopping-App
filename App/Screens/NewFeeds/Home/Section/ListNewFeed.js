// import Colors from 'App/Theme/Colors';
import React from 'react';
import { FlatList, Image, Text, TextInput, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../../Theme/Colors';

export default class ListNewFeed extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {


    return (

      <FlatList
        data={DATA}
        renderItem={({ item }) =>
          <TouchableWithoutFeedback onPress={() => alert(`Click on ${JSON.stringify(item)} `)}>
            <View style={{
              backgroundColor: Colors.white,
              padding: 5,
              paddingHorizontal: 10,
              overflow: 'hidden',
              borderRadius: 5,
              // color: 'black',
              marginVertical: 3,
              // marginHorizontal: ,
              borderBottomWidth: 0,

            }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Avatar containerStyle={{ marginVertical: 5 }} {...example} onPress={() => this.onAvatarPress(example)} />
                  <View style={{ height: 35, marginLeft: 8, marginTop: 5 }}>
                    <Text style={{ fontWeight: 'bold', marginBottom: -2 }}> {item.author}  </Text>
                    <Text style={{ fontSize: 12, color: Colors.grey }}> {item.time} </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                  <Icon name="more-horizontal" size={20} style={{ padding: 5 }} onPress={() => alert("Click on more ")}></Icon>
                </View>
              </View>
              <View>
                <View>
                  <Text> {item.text} </Text>
                </View>
                <View style={{ marginVertical: 5 }}>
                  <Image
                    style={{
                      width: '100%',
                      height: undefined,
                      aspectRatio: 1,
                    }}
                    source={item.image}
                  />
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Icon name="thumbs-up" size={20} style={{ padding: 5, paddingRight: 0 }} onPress={() => alert("Click on more ")}></Icon>
                    <Text style={{ marginLeft: 0, color: Colors.grey }}> 401 </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Icon name="message-square" size={20} style={{ padding: 5, paddingRight: 0 }} onPress={() => alert("Click on more ")}></Icon>
                    <Text style={{ marginLeft: 0, color: Colors.grey }}> 20 </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Icon name="eye" size={20} style={{ padding: 5, paddingRight: 0 }} onPress={() => alert("Click on more ")}></Icon>
                    <Text style={{ marginLeft: 0, color: Colors.grey }}> 2020 </Text>
                  </View>
                </View>
                {/* <View style={{ flexDirection: 'row', alignItems: "center" }}>
                  <Text style={{ marginLeft: 0, color: Colors.grey }}> Share </Text>
                  <Icon name="corner-up-right" size={20} style={{ padding: 5, paddingRight: 0 }} onPress={() => alert("Click on more ")}></Icon>
                </View> */}
              </View>
              <View style={{ borderTopWidth: 1, borderTopColor: Colors.lynxWhite }}>
                <View style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  backgroundColor: Colors.white,
                  overflow: 'hidden',
                  borderRadius: 5,
                  padding: 5,
                  // marginBottom: 10
                }}>
                  <Avatar containerStyle={{ marginVertical: 5 }} {...example} onPress={() => this.onAvatarPress(example)} />
                  <View style={{ paddingHorizontal: 10 }}>

                    <TextInput
                      style={{
                        height: 40, textAlignVertical: 'center', marginLeft: 10, width: 250
                      }}
                      placeholder="Write your comment..."
                      onChangeText={() => { }}
                    // defaultValue={"Write something"
                    />
                  </View>
                  <Icon style={{ backgroundColor: Colors.lynxWhite, borderRadius: 50, padding: 5 }} name="send" color={Colors.grey} size={20} onPress={() => alert("Chưa có làm, bấm chi mà bấm")}></Icon>
                </View>
              </View>
            </View>
          </ TouchableWithoutFeedback>
        }
        // horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />

    )
  }
}

const example = {
  title: 'Monitored Avatar (see logs)',
  // ribbonLabel: 'New',
  // badgeProps: {size: 'pimpleBig', backgroundColor: Colors.green30 },
  // badgePosition: 'TOP_RIGHT',
  size: 30,
  // source: require("../../../../Assets/Images/defaults/icons-user.png")
  source: {
    uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-1/c80.0.320.320a/p320x320/76914826_2371633566387374_1623907536681828352_o.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_oc=AQnuM4KoCWp1wkkWPAdN4Vvv-O378x769PPArGEuRIJ2KIKFV684glYedMx80Tqh104&_nc_ht=scontent.fsgn2-2.fna&oh=0ff0d8837c32705113369ca3a301405e&oe=5EB99705'
    // uri: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.0-1/p320x320/21543796_1473036992765827_8312056627909317286_o.png?_nc_cat=1&_nc_sid=1eb0c7&_nc_oc=AQnutia-x-2isK3prFWvg3S9B-1QvDuZvzj5KIvxiibef-RJ3Z9V2xRFavc8Gso_7iQ&_nc_ht=scontent.fsgn2-4.fna&oh=5a9dc41ac5083af9d2a5ffe2d15004dd&oe=5EB6CED2'
  }
}

const DATA = [
  {
    id: '3aafc-c605-48d3-a4f8-fbd91aa93',
    author: 'Shopee',
    time: '4 Tháng 4 lúc 08:58',
    text: 'LỊCH CHƯƠNG TRÌNH THÁNG 4 - Ở NHÀ KHÔNG KHÓ, CÓ SHOPEE LO ',
    image: { uri: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/91630249_2715226048733864_4970022428492169216_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_oc=AQmtVYTx-qhyE8KkwxkkKIPHM0T-DepTUYwDt7H3wVC367bV0KUWz4RzvhuSVAFDICw&_nc_ht=scontent.fsgn2-3.fna&oh=9665e43e4477d008f974d25c70fa1682&oe=5EB88C4C' }
  },
  {
    id: '3aafc-c605-48d3-a4f8-fbd91aa97f63',
    author: 'Thăng Fly Comic',
    time: '4 hours',
    text: 'Giang hồ mùa dịch Covid19.',
    image: require("../../../../Assets/Images/defaults/post_content.png")
  },
  {
    id: '42344a0f-3da1-471f-bd96-145571e29d72',
    author: 'Thăng Fly Comic',
    time: '4 hours',
    text: 'Một tin rất nức lòng và ê răng, tốn nước bọt của người hâm mộ ngay giữa mùa Covid19. ',
    image: { uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/92351245_2886679794734866_8127717985495285760_o.png?_nc_cat=100&_nc_sid=730e14&_nc_oc=AQnxLDcrZ2spWp6JIsxUg7GhJlSQzRlStjdcUWhLaUvsYd-oVnWSeB7KFSx5sl6C774&_nc_ht=scontent.fsgn2-2.fna&oh=9241dd24072ff3370d4767cf8d6caad0&oe=5EB7E4F6' }
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    author: 'Thăng Fly Comic',
    time: '10 hours',
    text: 'Chiếc "ATM gạo" đầy tình nhân ái ở Sài Gòn, phát gạo 24/24 mùa Covid19.',
    image: { uri: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/s1080x2048/92331918_2884518768284302_9187085382884261888_o.png?_nc_cat=107&_nc_sid=730e14&_nc_oc=AQlDSHOGH7WfaU834LVeUNMjfpWweeCXOj2d2wNlHNCAOqd8zzbSk-qomsGmcabAoLI&_nc_ht=scontent.fsgn2-1.fna&oh=b71be40a3f71227a5010225b7ef8b834&oe=5EB907A8' }
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    author: 'Thăng Fly Comic',
    time: '4 hours',
    text: `Hết dịch không thành master chef thì cũng thành heo. Vô đây coi video của bạn gái mình nha: https://youtu.be/PNWNzIpXta8`,
    image: { uri: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/s1080x2048/91993636_2880751735327672_4341309726835867648_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_oc=AQny9b188BKu_39GIcV7jZvyAAA9uuIDgiaKUtOJBdVUJ1XBpxCmeB1MCmJVVHi19qQ&_nc_ht=scontent.fsgn2-3.fna&_nc_tp=7&oh=dfb62503bed9378266eab4d755151ef0&oe=5EB77098' }
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    author: 'Thăng Fly Comic',
    time: '4 hours',
    text: 'Một tin rất nức lòng và ê răng, tốn nước bọt của người hâm mộ ngay giữa mùa Covid19. ',
    image: { uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/92351245_2886679794734866_8127717985495285760_o.png?_nc_cat=100&_nc_sid=730e14&_nc_oc=AQnxLDcrZ2spWp6JIsxUg7GhJlSQzRlStjdcUWhLaUvsYd-oVnWSeB7KFSx5sl6C774&_nc_ht=scontent.fsgn2-2.fna&oh=9241dd24072ff3370d4767cf8d6caad0&oe=5EB7E4F6' }
  },
  {
    id: '3a3268afc-c605-48d3-a4f8-fbd91aa97f63',
    author: 'Thăng Fly Comic',
    time: '4 hours',
    text: 'Một tin rất nức lòng và ê răng, tốn nước bọt của người hâm mộ ngay giữa mùa Covid19. ',
    image: { uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/92351245_2886679794734866_8127717985495285760_o.png?_nc_cat=100&_nc_sid=730e14&_nc_oc=AQnxLDcrZ2spWp6JIsxUg7GhJlSQzRlStjdcUWhLaUvsYd-oVnWSeB7KFSx5sl6C774&_nc_ht=scontent.fsgn2-2.fna&oh=9241dd24072ff3370d4767cf8d6caad0&oe=5EB7E4F6' }
  },
  {
    id: '54a0f-3da1-471f-bd96-145571e29d72',
    author: 'Thăng Fly Comic',
    time: '4 hours',
    text: 'Một tin rất nức lòng và ê răng, tốn nước bọt của người hâm mộ ngay giữa mùa Covid19. ',
    image: { uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/92351245_2886679794734866_8127717985495285760_o.png?_nc_cat=100&_nc_sid=730e14&_nc_oc=AQnxLDcrZ2spWp6JIsxUg7GhJlSQzRlStjdcUWhLaUvsYd-oVnWSeB7KFSx5sl6C774&_nc_ht=scontent.fsgn2-2.fna&oh=9241dd24072ff3370d4767cf8d6caad0&oe=5EB7E4F6' }
  },
  {
    id: '3a32afc-c605-48d3-a4f8-fbd91aa97f63',
    author: 'Thăng Fly Comic',
    time: '4 hours',
    text: 'Một tin rất nức lòng và ê răng, tốn nước bọt của người hâm mộ ngay giữa mùa Covid19. ',
    image: { uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/92351245_2886679794734866_8127717985495285760_o.png?_nc_cat=100&_nc_sid=730e14&_nc_oc=AQnxLDcrZ2spWp6JIsxUg7GhJlSQzRlStjdcUWhLaUvsYd-oVnWSeB7KFSx5sl6C774&_nc_ht=scontent.fsgn2-2.fna&oh=9241dd24072ff3370d4767cf8d6caad0&oe=5EB7E4F6' }
  },
  {
    id: '5842344a0f-3da1-471f-bd96-145571e29d72',
    author: 'Thăng Fly Comic',
    time: '4 hours',
    text: 'Một tin rất nức lòng và ê răng, tốn nước bọt của người hâm mộ ngay giữa mùa Covid19. ',
    image: { uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/92351245_2886679794734866_8127717985495285760_o.png?_nc_cat=100&_nc_sid=730e14&_nc_oc=AQnxLDcrZ2spWp6JIsxUg7GhJlSQzRlStjdcUWhLaUvsYd-oVnWSeB7KFSx5sl6C774&_nc_ht=scontent.fsgn2-2.fna&oh=9241dd24072ff3370d4767cf8d6caad0&oe=5EB7E4F6' }
  },
  {
    id: '54a0-3da1-471f-bd96-145571e29d72',
    author: 'Thăng Fly Comic',
    time: '4 hours',
    text: 'Một tin rất nức lòng và ê răng, tốn nước bọt của người hâm mộ ngay giữa mùa Covid19. ',
    image: { uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/92351245_2886679794734866_8127717985495285760_o.png?_nc_cat=100&_nc_sid=730e14&_nc_oc=AQnxLDcrZ2spWp6JIsxUg7GhJlSQzRlStjdcUWhLaUvsYd-oVnWSeB7KFSx5sl6C774&_nc_ht=scontent.fsgn2-2.fna&oh=9241dd24072ff3370d4767cf8d6caad0&oe=5EB7E4F6' }
  },

];