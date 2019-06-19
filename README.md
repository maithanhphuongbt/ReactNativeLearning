# React Native
Creator: Mai Thanh Phương
Email: maithanhphuong.cntt@gmail.com
### 1. Setting

+ Android studio: https://developer.android.com/studio/
+ Built-in emulator in Android Studio
+ Node JS: https://nodejs.org/en/
+ Java Development Kit (JDK 8 or newer)
+ Add enviroment variable cho windows
    Open Advance system settings -> Advanced -> Environment Variables -> Add new variable
    + ANDROID_HOME : sdk path (Ex: C:\Users\username\AppData\Local\Android\Sdk)
    + JAVA_HOME: jdk path (Ex: C:\Program Files\Android\Android Studio\jre\jre)
+ Visual Studio Code:  https://code.visualstudio.com/
+ Node Package Manager (NPM)

### 2. Setting react native:

    npm install -g react-native-cli
    react-native init FirstApp
    cd FirstApp
    react-native run-android
    
    * Note: build fail with new version: https://stackoverflow.com/questions/48756550/unable-to-resolve-module-accessibilityinfo-when-trying-to-create-release-bund
### 3. Variable in react native
    + let: 
        - Chỉ tồn tại trong cặp {} chứa nó
        - Ưu điểm tự destroy khi ra khỏi {} đỡ tốn bộ nhớ
        - Ex: 
            for(let i = 0; i < 5 ; i++) {
                let chỉ tồn tại trong đây
            }
    + var: tầm hoạt động không giới hạn
    + Template variables:
        VD: let name = "Mai Thanh Phuong"
        console.log(`Xin chao ban ${name}`)
    + const: hằng số
        VD: const NAME = "Mai Thanh Phuong"

### 4. Function
    + Arrow function
        - Single line: let Hi = ()=> console.log("Hello friends");
        - Multiline: let Hi = (a,b) => 
        {
            var c = 5;
            var sum = 0;
            sum = a+b*c;
            console.log(sum);
        }
### 5. Object(biến có cấu trúc)
    + Giống như class nhưng khác ở chỗ là không cần phải khởi tạo giống như class.
    + VD: var NhanVien = {
        manhanvien: "MNV001",
        tennhanvien: "A",
        cannang: 80,
        cannangsaumothang: ()=> NhanVien.cannang * 2
    }
    console.log(NhanVien.cannangsaukhian())
    => 160
### 6. Destructuring
    + Phân rã cần cái nào xài cái đó khong gọi lại nguyên Object đỡ tốn tài nguyên ứng dụng.
    + VD: phân rã object
    let ConNguoi = {
        ten: "A",
        tuoi: 1,
        cannang: 80,
        xinchao: ()=> "Chao ban"+ConNguoi.ten
    }
    let {ten: tencuaban, tuoi: tuoicuaban, xinchao: hamchao} = ConNguoi
    console.log(tencuaban+ "-" + tuoicuaban + "-" + hamchao())
    + VD: phân rã mảng
    arrays = ["A", "B", "C", "D"];
    let[gt1,gt2,gt3,gt4] = arrays;
    console.log(gt4)
### 7. Rest paremater (tham số chưa biết trước): ...nThamSo (... kí hiệu mảng)
    let TinhTong - (a,b,...nThamSo)=> {
        let tong = 0;
        nThamSo.map((value) => tong+=value);
        return tong;
    }
    consolog.log(TinhTong(1,2,3,4,5));
    => 15
### 8. Class
    + Biến trong class phải trong constructor(){}
    + super(); kế thừa những gì parent có
    + Thực thi phải khai báo trong hàm
    + Hàm không được xài template variable
    + Không được khai báo arrow function vì arrow function là 1 biến (biến thì phải trong constructor)
    + Tất cả biến trong constructor không được khai bào dữ liệu phải thông qua this.
    + VD:
    class Connguoi {
        contructor(){
            this.tay = "Dai";
            this.chan = "Ngan";
            this.xinchao = ()=> "A";
        }
        XuatTen(ten) {
            return "Xin chao" + ten;
        }
    }
    class Contrai extends Connguoi {
        constructor() {
            super();
            this.gioitinh = "Nam"
        }
    }
    contrai = new Contrai();
    console.log(contrai.xuatten("A");
    => Xin chao A
### 9. Xử lý mảng trong ES6
    + VD: Mảng thường
    mang = ["A","B","C"];
    for(let giatri of mang) {
        console.log(`giatrij cua mang la: ${giatri}`)
    }
    + VD: Mảng Object
    objects = [
        {name: "A", tuoi: 1},
        {name: "B", tuoi: 2},
    ]
    for(let giatri of objects) {
        console.log(`gia trị là: ${giatrij.name}`);
    }
    + Tim giá trị mảng(find, filter, findIndex)
    - find: lọc ra thằng tìm thấy đầu tiên
    - filter: tìm ra tất cả những thằng phù hợp với điều kiện tìm kiếm ( thừng dùng để làm serch)
    - findIndex: return vị trí đầu tiên tìm thấy được
    VD: let khoahoss = [
        {tenkhoahoc: "A", giangvien: "1"},
        {tenkhoahoc: "B", giangvien: "2"},
        {tenkhoahoc: "C", giangvien: "3"},
    ]
    let timduoc = khoahocs.find((value)=>{
        return value.giangvien === 1
    })
    console.log(timduoc);
### 10. Map in ES6
    + VD:
    let mangMap = new Map([
        ["name", "A"],
        ["age", 12],
        ["hair", "sort"]
    ]);
    console.log(mangMap.get("name")
    => A
    console.log(mangMap.get("age")
    => 12
    console.log(mangMap.get("hair")
    => sort
    + Check key:
    console.log(manMap.has("name"));
    => true
    + Check size
    console.log(mangMap.size)
    => 3
    + Duyệt mảng for
    for (let[key,value] of mangMap) {
        console.log(key + "-" + value);
    }
    =>  "ten - A"
        "age - 12"
        "hair - sort"
    + Duyệt mảng forEach
    mangMap.forEach((value, key) => {
      console.log(key + "-" + value  
    })
    + Gán phần tử vào mảng Map
    mangMap.set("noise","big");
    + Xóa phần tử trong mảng Map
    mangMap.delete("name")
### 11. Mảng Set (không có key chỉ có value)
    + VD: 
    let giatri = ["Sữa ông thọ", "Vinamilk", "Sữa mẹ"]
    let mangSet = new Set(giatri);
    + Gán phần tử vào mảng Set
    mangSet.add("sữa bò");
    + Xóa phần tử trong mảng Set
    mangSet.delete("Sữa ông thọ")
    +   
### 12. Componen lifecycle

[![N|Solid](https://cdn-images-1.medium.com/max/1200/1*Y4Sf-f3WRHh1H1345r_kRQ.jpeg)](https://nodesource.com/products/nsolid)

### 13. Detect platform
1. import platform từ thư viện reat-native
2. Sử dụng bằng cách gọi Platform.OS (type: string)
3. So sánh
4. VD:
    import {Platform} from 'react-native';
    const styles = StyleSheet.create({
        height: (Platform.OS === 'ios') ? 200 : 100,
    })
5. Version android: Platform.Version
    VD: 
    if(Platform.version === 21) {
        console.log('Running on Lollipop')
    }
6. File đuôi mở rộng
    VD: muốn file index chỉ hoạt đọng trên ios thì đặt tên file: index.ios.js or android: index.android.js

### 14. Prop and  State
    + Prop: là tham số truyền vào khi component được gọi và không thay đổi giá trị trong suốt vòng đời của component
    + State: được khai báo ở component và giá trị có thể được thay đổi. Phải được khởi tạo ở constructora()
### 15. Flex box
    +  flexDirection:(row or column) quy định hường hiển thị
    + justifyContent: phần bố các component theo trục tọa độ chính(phụ thuộc flexDirection) : flex-start, flex-end, flex-center, flex-space-around, flex-space-between.
    + alignItems: phần bố các component theo trục tọa độ thứ 2 (khác với flexDirection): flex-start, flex-end, flex-center, stretch

### 16. Text component
16.1 ellipsizeMode: hiển thị nội dung bị cắt trong text dài thành 3 chấm

    + head: ...abc
    + middle: abc...xyz
    + tail: abc...
    + clip (only iOS): chuỗi mất và không có dẫu 3 chấm
    + ellipsizeMode chỉ hoạt động khi khai báo cùng với props numOfLine.
    + VD:
    <Text ellipsizeMode={"head"} numberOfLine = {1}>
    content of text
    </Text>
16.2 numberOfLines: quy định số dòng Text
16.3 OnLayout function: trả ra kích thước component
    VD: 
    onLayOut((event) => event.nativeEvent.layout.X)
16.4 onLongPress function(): / onPress
16.5: Style:

    + color
    + fontFamily
    + fontSize
    + fontStyle
    + fontWeight
    + lineHeight
    + textAlign
    + textDecorationLine
    + textShadowRadius
    + textShadowOffset
    + textShadowRadius
    + textAlignVertical(only Android)
    + fontVariant (only iOS)
    + letterSpacing (only iOS)
    + textDecorationColor (only iOS)
    + textDecorationStyle (only iOS)
    + writingDirection (only iOS)
16.6 testID: sử dụng để xác định vị trí kết thúc của đoạn text.
16.7 selectable: cho phép coppy text hoặc không (only Android)
16.8 adjustsFontSizeToFit: boolean(only iOS): tự động scale font bằng container
16.9 minimunFontScale: number(only iOS) font nhỏ nhất có thể
16.10 suppressHightlight: boolean (only iOS) bỏ hightlight khi user nhấn vào text
### 17. TextInput
1. uhderlineColorAndroid={transparent} (only Android): màu trong suốt đường line phía dưới
2. windowSoftInputMode với tham số adjustResize (only Android): textInput đẩy lên khi mở bàn phím
3. autoCapitalize enum(string): Tự động viết hoa cho các đoạn text. Sẽ nhận vào các tham số sau:
    - characters: tất cả các ký tự
    - words: Chữ đầu tiên của mỗi từ
    - sentences: Từ đầu tiên của một câu
    - none: không tự động viết hoa
4. autoCorrect bool: bật tính năng auto-correct
5. autoFocus bool: focus khi componentDidMount được gọi (default false
6. blurOnSubmit bool : Nếu là true thì TextInput sẽ mất focus khi submit. Mặc định giá trị là true.
7. editable bool: Nếu là false khong cho người dùng nhập văn bản
8. keyboardType enum(string): Khai báo keyboard sẽ được mở. Bao gồm: default, email-address, numeric, phone-pad.....
9. maxLength number: Giới hạn số ký tự được phép nhập
10. multiline bool: Nếu là true đoạn text có thể nhập nhiều dòng.
11. placeholder node: nhập vào chuỗi nhắc nhở
12. placeholderTextColor:
13. returnKeyType enum: trả về kiểu nhập là gì
14. secureTextEntry bool: nhập text ******
15. selectTextOnFocus bool: Nếu là true thì đoạn text được gán sẽ tự động focus.
16. selection {start: number, end: number} sẽ chọn đoạn văn bản tương ứng với vị trí truyền vào.
17. selectionColor color: Màu hightlight của textInput
18. value string: đoạn text mặc định cho inputtext
19. inlineImageLeft string: nếu được khai báo sẽ render hình ảnh bên trái (only Android)
20. inlineImagePadding number (only Android)
21. numberOfLines number: số dofg được phép hiển thị(only Android)
22. returnKeyLabel string: trả về key của label (only Android)
23. underlineColorAndroid color màu border bottom textinput (only Android)
24. clearButtonMode enum: Clear button sẽ xuất hiện bên phải của text input. Bao gồm các tham số: never, while-editing, unless-editing, aways (iOS)
25. clearTextOnFocus bool: Nếu là true thì đoạn text sẽ bị xóa khi textinput được focus (iOS)
26. dataDetectorTypes enum: Bao gồm các tham số: phoneNumber, link, address, calendarEvent, none, all. (iOS)
27. enablesReturnKeyAutomatically bool: Nếu là true bàn phím sẽ disables khi không có text và tự động enables khi có text (iOS)
28. keyboardAppearance enum: Khai báo màu của key board bao gồm các tham số: default, light, dark (iOS)
29. selectionState DocimentSelectionState: đây là một trạng thái đáp ứng nhu cầu lựa chọn thông tin văn bản.
30. onBlur function : Được gọi khi bị mát focus
31. onChange function: Được gọi khi đoạn text thay đổi
32. onChangeText function: Được gọi khi đoạn text thay được và đoạn text được thay đổi sẽ là tham số của hàm.
33. onContentSizeChange funciton: được gọi khi kích thước của text thay đổi và trả ra object {nativeEvent: {contentSize: {width, height}}}
34. onEndEditing function: được gọi khi kết thúc nhập text
35. onFocus function: Được gọi khi đoạn text được focus
36. onLayout function: được gọi khi kết thúc nhập text.
37. onFocus function: Được gọi khi đoạn text được focus.
38. onLayout function: Được khởi tạo và layout thay đổi {x, y, width, height}
39. onScroll function: Được khởi tạo khi nội dung được scroll sẽ trả ra tham số là một object {nativeEvent: {contentOffset : {x,y}}}
40. onSUbmitEditing function: Được gọi khi người dùng nhấn nút submit

### 18. Image component
    VD: <Image source={require('./images/hot.png')}/>
    + Trong react native chúng ta có thể chỉ định hình ảnh riêng cho từng platform bằng cách tạo ra các file chỉ định mở rông: hot.ios.png or hot.android.png
    + Multiscreen: @2x or @3x VD: hot@2x.png , hot@3x.png
    + Load file Gif và webP: iOS hỗ trợ sẵn, trên android thì phải config dependeces: 
    - file android/app/build.gradle
    compile 'com.facebook.fresco:animated-base-support:1.3.0'
    // For animated GIF support
    compile 'com.facebook.fresco:animated-gif:1.3.0'
    // For WebP support, including animated WebP
    compile 'com.facebook.fresco:animated-webp:1.3.0'
    compile 'com.facebook.fresco:webpsupport:1.3.0'
    // For WebP support, without animations
    compile 'com.facebook.fresco:webpsupport:1.3.0'
    
    1. onError function: được gọi khi hình ảnh load thất bại
    2. onLayout function: được gọi khi ứng dụng mount.
    3. onLoad function: được gọi khi hình ảnh được hiển thị lên màn hình
    4. onLoadEnd function: được gọi khi quá trình load hình thành công hoặc thất bại
    5. onLoadStart function: được gọi khi hình ảnh vừa bắt đầu load
    6. onPartialLoad function: được gọi khi một phần của hình ảnh được load hoàn tất (iOS)
    7. onProgress function: được gọi trong tiến trình download event sẽ bao gồm tham số: {nativeEvent: {loaded, total}} (iOS)
    8. resizeMode enum(string): thay đổi kích thước hình ảnh bao gồm các tham số:
        + cover: thay đổi kích thước hình ảnh bằng hoặc lớn hơn kích thước của View chứa nó.
        + contain: thay đổi kích thước hình ảnh bằng hoạc nhỏ hơn kích thước của view (trừ padding).
        + stretch: Căng điều kích thước của hình ảnh. Sẽ làm ảnh hưởng tới tỷ lệ của screen
        + repeat: lập lại hình ảnh
    9. source: imageSourcePropType: Source của hình ảnh sẽ là URL hoặc local file.
    10. resizeMethod enum (string): được dùng để thay đổi kích thước của hình ảnh khi kích thước thật của hình ảnh khác với kích thước của View. Bao gồm các tham số: (Android)
        - auto: sẽ tự động chọn giữa resize hoặc scale
        - resize: thay đổi kích thước hình ảnh ở memory trước khi được hiển thị
        - scale: dùng để co giản hình ảnh. Hoạt động nhanh hơn resize.
    11. accessibilityLabel string: đoạn text được đọc bằng trình đọc màn hình khi người dùng tương tác với View (iOS)
    12. capInsets (object): chỉ định cụ thể vị trí tha đổi kích thước của hình ảnh {top: number, left: number, bottom: number, right: number} (iOS)
    13. defaultSource object: Khai báo source mặc định cho image {url: string, width: number, height: number, scale: number} (iOS)
    14. static getSize (url, success, failure: Đây là phương thức dùng để truy xuất kích thước của hình ảnh trước khi nó được hiển thị)
        + url string: đường dẫn của hình ảnh
        + success function: sẽ được gọi nếu như hình ảnh được tìm thấy và truy xuất được chiều rộng và chiều cao.
        + failure function: sẽ được gọi khi không tìm được hình ảnh hoặc không lấy được chiều rộng và chiều cao.
    15. static prefetch(url) : tải lại hình ảnh bằng cách download và lưu vào cache khi tải lại thì tự động load từ dish cache
    16. transform [{perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}]
    17. backfaceVisivility enum (string): Ẩn hoặc hiển thị Image tương ứng với 'visible' và 'hidden'
    18. backgroundColor
    19. borderBottomLeftRadius
    20. borderBottomRightRadius
    21. borderColor
    22. borderRadius
    23. borderTopLeftRadius
    24. borderTopRightRadius
    25. borderWidth
    26. opacity
    27. overflow enum('visible', 'hidden'): ẩn hoặc hiện phần bị tràn ra
    28. resizeMode Object.keys(ImageResizeMode): thay đổi kích thước
    29. tintColor color: thay đổi màu của hình ảnh


### 19. View component
    + Là container chứa các component con
    + View hõ trợ cú pháp lồng, style và sự kiện touch

#### NativeEvent:
    + changedTouches: là một mảng chứa các sự thay đổi của sự kiện touch
    + identifier: ID của touch
    + locationX: Trả ra vị trí X nới người dùng chạm vào
    + locationY: trả ra vị trí Y nơi người dùng chạm vào
    + pageX: Trả ra vị trí X nơi người dùng chạm vào, liên quan tới component cha
    + pageY: Trả ra vị trí Y nơi người dùng chạm vào, liên quan tới component cha.
    + target: id của component đang nhận sự kiện touch

#### prop của View
    + hitSlop: mở rộng phạm vi touch của View. Khuyến cáo 30-40 điểm/mật độ điểm ảnh
    VD: muốn chạm view mở rộng ra 10
    hitSlop = {{top:10, bottom: 10, left: 10, right: 10 }}
        - Note: việc mở rộng phạm vi sẽ bị ảnh hưởng bởi ZIndex của View.
    + pointerEvents enum(string): Quy định sự kiện touch của View.Bao gồm các tham số:
        + auto: View có thể nhận sự kiện touch
        + none: View không nhận sự kiện touch
        + box-none: VIew sẽ không nhận sự kiện touch nhưng View con thì có thể nhận sự kiện touch
        - Note: pointerEvent có thể được khai báo trong style
    + removeSClippedSubviews bool: Nếu là true thì sẽ cho phép View phát sinh thanh scrool khi View có nhiều view con trượt ra khỏi màn hình.


​    
### 20. Navigator
    Step do it:
        npm install react-navigation --save
        
        npm install react-native-gesture-handler --save
        
        react-native link
        
    Create /pages/FirstPage.js and /pages/SecondPage.js

#### in App.js

        //This is an example of React Native Tab
        import React from 'react';
        //import react in our code.
        //For React Navigation Version 2+
        //import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
        //For React Navigation Version 3+
        import {
          createStackNavigator,
          createMaterialTopTabNavigator,
          createAppContainer,
        } from 'react-navigation';
        //import Navigator in our project
        
        import FirstPage from './page/FirstPage';
        import SecondPage from './page/SecondPage';
        //Making TabNavigator which will be called in App StackNavigator
        //we can directly export the TabNavigator also but header will not be visible
        //as header comes only when we put anything into StackNavigator and then export
        const TabScreen = createMaterialTopTabNavigator(
          {
            Home: {screen: FirstPage},
            Settings: {screen: SecondPage},
          },
          {
            tabBarPosition: 'top',
            swipeEnabled: true,
            animationEnabled: true,
            tabBarOptions: {
              activeTintColor: '#FFFFFF',
              inactiveTintColor: '#F8F8F8',
              style: {
                backgroundColor: '#633689',
              },
              labelStyle: {
                textAlign: 'center',
              },
              indicatorStyle: {
                borderBottomColor: '#87B56A',
                borderBottomWidth: 2,
              },
            },
          }
        );
        
        //making a StackNavigator to export as default
        const App = createStackNavigator({
          TabScreen: {
            screen: TabScreen,
            navigationOptions: {
              headerStyle: {
                backgroundColor: '#633689',
              },
              headerTintColor: '#FFFFFF',
              title: 'TabExample',
            },
          },
        });
        //For React Navigation Version 2+
        //export default App;
        //For React Navigation Version 3+
        export default createAppContainer(App);        

#### in FistPage.js

        // Home screen
        import React, {Component} from 'react';
        //import react in our code.
        import {Text, View} from 'react-native';
        //import all the components we are going to use.
        
        export default class FirstPage extends Component {
            render() {
                return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Home Screen</Text>
                </View>
                );
            }
        }
#### in SecondPage.js 

        // Setting screen
        import React, {Component} from 'react';
        //import react in our code.
        import {Text, View} from 'react-native';
        //import all the components we are going to use.
        
        export default class SecondPage extends Component {
            render() {
                return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Setting Screen</Text>
                </View>
                );
            }
        }

#### Note: in react-native version 0.59.9 need delete fild build in android folder before run app.

 
