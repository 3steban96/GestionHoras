import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(225,248,242,1)"
  },
  ellipse1: {
    left: 0,
    width: 579,
    height: 740,
    position: "absolute",
    top: 0
  },
  ellipse: {
    left: 19,
    width: 581,
    height: 740,
    position: "absolute",
    top: 0
  },
  ellipse1Stack: {
    width: 600,
    height: 740
  },
  title:{
    left:170,
    fontSize:40,
    color:"white",
    fontWeight:'bold'
  },

////StyleDatosFila!
  containerSecundary:{
  flex:1,
  },
  rowTitleD:{      
    flexDirection: 'row',
    paddingHorizontal: 190,
    height:65      
  },  
  columnD: {
    flex: 0.5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },  
  titleD:{
    fontSize:35,
    color:'white',
    fontWeight:'bold'
  },

  ////////////StyleSalaryFila2
  rowTitleS:{    
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height:30,
    // backgroundColor:'black'
  },
  columnS:{
    flex: 0.5,
    paddingHorizontal: 95,
    // paddingVertical: 10,
  },
  titleS:{
    fontSize:20,
    color:'#D9D9D9',
    fontWeight:'bold'
  },
  /////////////StyleInputSalary
  rowTitleSI:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    
  },
  columnSI:{
    flex: 0.5,
    paddingHorizontal: 95,
    top:-8
  },
  textInputSI:{
    paddingBottom:10,
    fontSize:20
  },
  ////////////StyleLabelMonFri
  rowTitleLV:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:70
  },
  columnLV:{
    flex:0.5,    
  },
  titleLV:{
    paddingBottom:10,
    fontSize:21,
    fontWeight:'bold',
    color:"white"
  },
////////////StyleLabelEntryTime
  rowTitleCT:{
   flexDirection:'row',
   justifyContent:'space-between',
   paddingHorizontal:55 
  },
  columnCT:{
    flex:0.5
  },
  titleCT:{
    paddingBottom:10,
    fontSize:15,
    fontWeight:'500',
    color:'white'
  },
////////////StyleLabelHourEntryTime
  // rowTitleHour:{
  //   flexDirection:'row',
  //   justifyContent:'space-between',
  //   paddingHorizontal:50,
  //   // backgroundColor:'white'
  // },
  // columnHour:{
  //   height:30,
  //   flex:0.08,
  // },
  // titleHour:{
  //   width:40,
  //   fontSize:15,
  //   fontWeight:'500',
  //   color:'#2F6070',
  //   backgroundColor: 'black',
  // },
  // /////////////StyleColum2HourEntryTime
  // columnHour2:{
  //   top:-16,
  //   flex:.9,
  //   left:-29,
  //   height:25,
  // },
  // pickerHour2:{
  //   left:45,
  //   fontSize:15,
  //   color:'#2F6070',
  //   width:100,
  //   height:15,
  //   backgroundColor:'black'    
  // },
  //////////////StyleColumnMinutEntrytime
  // columnMin3:{
  //   top:0,
  //   flex:.9,
  //   left:-80,
  //   height:35,
  // },
  // titleMin:{
  //   fontSize:15,
  //   color:'#2F6070',
  //   backgroundColor:'black',
  //   width:60
  // },
  // columnMin4:{
  //   left:-550,
  //   width:100,
  //   fontSize:15,
  // },
  // pickerMin4:{
  //   top:-16,
  //   left:323,
  //   fontSize:15,
  //   color:'white',
  //   backgroundColor:'black',
  // }
  // columnMin3: {
  //   flex: 1,
    
  // },
  // titleMin: {
  //   fontSize: 15,
  //   color: '#2F6070',
  //   backgroundColor: 'black',
  //   width:60,
  //   // textAlign: 'center',
  //   // padding: 3,
  //   left:-70
  // },
  // columnMin4: {
  //   height:40,
  //   flex: .5,
  // },
  // pickerMin4: {
  //   height:40,
  //   top:-15,
  //   left:-220,
  //   color: 'white',
  //   backgroundColor: 'transparent',
  // },
});

