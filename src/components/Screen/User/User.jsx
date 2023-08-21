import React,{useState} from "react";
import { View, Text, TextInput,Animated, Alert, TouchableOpacity, Switch, SafeAreaView  } from "react-native";
import styles from "./UserStyle.js"
import Svg, { Ellipse } from "react-native-svg";
import {Picker} from '@react-native-picker/picker';
import { saveData } from "../../Api/Api.js";
import { isEnabled } from "react-native/Libraries/Performance/Systrace.js";


function User(props){

    const [isFocused, setIsFocused] = useState(false);
    const underlineWidth = new Animated.Value(0);    
    const [selectedEntryTime, setSelectedEntryTime] = useState(1);
    const [selectedEntryTimeMinutes, setSelectedEntryTimeMinutes] = useState(1);
    const [selectedExitTime, setSelectedExitTime] = useState(1);
    const [selectedExitTimeMinutes, setSelectedExitTimeMinutes] = useState(1);
    const [salaryMon, setSalaryMon]= useState("");

    const handleFocus = () => {
      setIsFocused(true);
      Animated.timing(underlineWidth, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      Animated.timing(underlineWidth, {
        toValue: 0,
        duration: 300, 
        useNativeDriver: false,
      }).start();
    };
    
        const [isEnabled, setIsEnabled]= useState(false);
        const [inputValue,setInputValue]= useState('')
        const handleToggleSwitch = ()=>{
            setIsEnabled(!isEnabled);
        }
        const handleInputChange = (text)=>{
            if(isEnabled){
                return;
            }
            setInputValue(text)
        }
    
    const handleSave = async () => {          
        const response = await saveData(salaryMon,selectedEntryTime,selectedEntryTimeMinutes,selectedExitTime,selectedExitTimeMinutes);

    //     try {
    //       if (response.message) {
    //         Alert.alert("Éxito", response.message);
    //       } else {
    //         Alert.alert("Error", "No se pudo guardar el archivo.");
    //       }
    //     } catch (error) {
    //       console.error("Error al guardar los datos:", error);
    //       Alert.alert("Error", "Ocurrió un error al guardar los datos.");
    //     }
      };
    return (
        
            <SafeAreaView style={styles.container}>
                <View style={styles.ellipse1Stack}>
                    <Svg viewBox="0 0 544.25 658.37" style={styles.ellipse1}>
                    <Ellipse
                        strokeWidth={4}
                        fill="rgba(96,137,138,1)"
                        cx={272}
                        cy={329}
                        rx={268}
                        ry={425}
                        stroke="rgba(230, 230, 230,1)"
                    ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 180 199.38" style={styles.ellipse}>
                    <Ellipse
                        strokeWidth={0}
                        fill="rgba(113,210,212,1)"
                        cx={90}
                        cy={100}
                        rx={90}
                        ry={130}
                    ></Ellipse>
                    </Svg>
                    {/* Fila 1*/}
                    <View style={styles.containerSecundary}>
                        <View style={styles.rowTitleD}>
                            <View style={styles.columnD}>
                                <Text style={styles.titleD}>Datos:</Text>
                            </View>
                        </View>
                    {/* Fila 2*/}
                        <View style={styles.rowTitleS}>
                            <View style={styles.columnS}>
                                <Text style={styles.titleS}>Salario:</Text>
                            </View>
                        </View>
                    {/* Fila 3*/}                    
                        <View style={styles.rowTitleSI}>                           
                            <View style={styles.columnSI}>       
                                <TextInput
                                    style={styles.textInputSI}
                                    onChangeText={(text) => setSalaryMon(text)}
                                    keyboardType="numeric"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    editable={!isEnabled}
                                    underlineColorAndroid="#D9D9D9"
                                    
                                />
                            </View>
                        </View> 
                        {/* Fila 4 Horario entrada*/}
                        <View style={styles.rowTitleLV}>
                            <View style={styles.columnLV}>
                                <Text style={styles.titleLV}>Horario Lunes-Viernes:</Text>
                            </View>
                        </View> 
                        {/* Fila 5*/}
                        <View style={styles.rowTitleCT}>
                            <View style={styles.columnCT}>
                                <Text style={styles.titleCT}>Horario de entrada:</Text>
                            </View>
                        </View>
                        {/* Fila 6*/}
                        <View style={styles.rowTitleHour}>
                            {/* columna 1 */}
                            <View style={styles.columnHour}>
                                    <Text style={styles.titleHour}>Hora:</Text>
                            </View>
                            {/* columna 2 */}
                            <View style={styles.columnHour2}>
                                <Picker
                                    selectedValue={selectedEntryTime}
                                    style={styles.pickerHour2}
                                    onValueChange={(itemValue) => setSelectedEntryTime(itemValue)}                                
                                >
                                    {Array.from({ length: 24 }, (_, index) => index + 1).map((number) => (
                                    <Picker.Item key={number} label={number.toString()} value={number} />
                                    ))}
                                </Picker>
                            </View>
                            {/* columna 3 */}
                            <View >
                                <Text >Minutos:</Text>
                            </View>

                            {/* Columna 4 */}
                            <View >
                                <Picker
                                selectedValue={selectedEntryTimeMinutes}
                                
                                onValueChange={(itemValue) => setSelectedEntryTimeMinutes(itemValue)}
                                >
                                {Array.from({ length: 60 }, (_, index) => index + 0).map((number) => (
                                    <Picker.Item key={number} label={number.toString()} value={number} />
                                ))}
                                </Picker>
                            </View>
                        </View> 
                        {/* <View style={styles.inputRowHE}>
                            <Text style={styles.labelLV}>Horario Lunes-Viernes</Text>                    
                            <Text style={styles.labelPHE}>Horario de entrada</Text>
                            <View style={styles.pickerContainer}>
                                <View style={styles.pickerContainerHE}>
                                    <Text style={styles.labelPHo}>Hora:</Text>                        
                                    <Picker
                                        selectedValue={selectedEntryTime}
                                        style={styles.pickerHE}
                                        onValueChange={(itemValue) => setSelectedEntryTime(itemValue)}                                
                                    >
                                        {Array.from({ length: 24 }, (_, index) => index + 1).map((number) => (
                                        <Picker.Item key={number} label={number.toString()} value={number} />
                                        ))}
                                    </Picker>
                                </View>
                                
                                <View style={styles.pickerContainerME}>
                                    <Text style={styles.labelPEM}>Minutos:</Text>
                                    <Picker
                                        selectedValue={selectedEntryTimeMinutes}
                                        style={styles.pickerME}
                                        onValueChange={(itemValue) => setSelectedEntryTimeMinutes(itemValue)}
                                    >
                                        {Array.from({ length: 60 }, (_, index) => index + 0).map((number) => (
                                        <Picker.Item key={number} label={number.toString()} value={number} />
                                        ))}
                                    </Picker>
                                </View>
                            </View>
                        </View> */}
                        {/* Fila 3 Horario salida*/}
                        {/* <View style={styles.inputRowHS}>
                            <Text style={styles.labelPHS}>Horario de salida:</Text>
                            <View style={styles.pickerContainerHS}>
                            <Text style={styles.labelPHSHo}>Hora:</Text>
                            <Picker
                                selectedValue={selectedExitTime}
                                style={styles.pickerHS}
                                onValueChange={(itemValue) => setSelectedExitTime(itemValue)}
                            >
                                {Array.from({ length: 24 }, (_, index) => index + 1).map((number) => (
                                <Picker.Item key={number} label={number.toString()} value={number} />
                                ))}
                            </Picker>
                            </View>
                            
                            <View style={styles.pickerContainerMS}>
                            <Text style={styles.labelPSM}>Minutos:</Text>
                            <Picker
                                selectedValue={selectedExitTimeMinutes}
                                style={styles.pickerMS}
                                onValueChange={(itemValue) => setSelectedExitTimeMinutes(itemValue)}
                            >
                                {Array.from({ length: 60 }, (_, index) => index + 0).map((number) => (
                                <Picker.Item key={number} label={number.toString()} value={number} />
                                ))}
                            </Picker>
                            </View>
                        </View> */}
                    
                    </View>                    
                    {/* <TouchableOpacity
                        style={[
                        styles.containerSwitch,
                        { backgroundColor: isEnabled ? '#567687' : '#fff' },
                        ]}
                        activeOpacity={0.8}
                        onPress={handleToggleSwitch}
                        >
                        <View style={styles.slider} />
                        <View
                            style={[
                            styles.sliderButton,
                            { transform: [{ translateX: isEnabled ? 20 : 0 }] },
                            ]}
                        />
                        <Text style={styles.text}>{isEnabled ? 'on' : 'off'}</Text>
                    </TouchableOpacity>                    
                    <TouchableOpacity onPress={() => {Alert.alert("Datos guardados correctamente");handleSave()}}style={styles.containerButton}>                    
                        <View style={styles.button}>
                            <Text  style={styles.textB}>Guardar</Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
            </SafeAreaView>        
      );
}
export default User;