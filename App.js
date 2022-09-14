import {
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
// var x = 0;
export default function App() {
  const [counter, setcounter] = useState("0");
  const [isEnabled, setisEnabled] = useState(false);

  function F_NUM(x) {
    x = String(x);
    if (counter == 0) {
      setcounter(x);
    } else {
      setcounter(counter + x);
    }
  }
  function F_EQUAL() {
    var a = counter.indexOf("+");
    var s = counter.indexOf("-");
    var d = counter.indexOf("/");
    var m = counter.indexOf("%");
    var z = counter.indexOf("*");

    var x = counter.length;

    if (a >= 0 || s >= 0 || d >= 0 || m >= 0 || z >= 0) {
      if (a >= 0) {
        var num1 = Number(counter.substring(0, a));
        var num2 = Number(counter.substring(a + 1));
        var num3 = num1 + num2;
        num3 = num3.toString();
        var D = num3.indexOf(".");
        if (D >= 0) {
          num3 = Number(num3);
          num3 = num3.toFixed(2);
        }
        setcounter(num3);
      } else if (s >= 0) {
        var num1 = Number(counter.substring(0, s));
        var num2 = Number(counter.substring(s + 1));
        var num3 = num1 - num2;
        num3 = num3.toString();
        var D = num3.indexOf(".");
        if (D >= 0) {
          num3 = Number(num3);
          num3 = num3.toFixed(2);
        }
        setcounter(num3);
      } else if (d >= 0) {
        var num1 = parseFloat(counter.substring(0, d));
        var num2 = parseFloat(counter.substring(d + 1));
        var num3 = num1 / num2;
        num3 = num3.toString();
        var D = num3.indexOf(".");
        if (D >= 0) {
          num3 = Number(num3);
          num3 = num3.toFixed(2);
        }
        setcounter(num3);
      } else if (m >= 0) {
        var num1 = Number(counter.substring(0, m));
        var num2 = Number(counter.substring(m + 1));
        var num3 = num1 % num2;
        num3 = num3.toString();
        var D = num3.indexOf(".");
        if (D >= 0) {
          num3 = Number(num3);
          num3 = num3.toFixed(2);
        }
        setcounter(num3);
      } else if (z >= 0) {
        var num1 = Number(counter.substring(0, z));
        var num2 = Number(counter.substring(z + 1));
        var num3 = num1 * num2;
        num3 = num3.toString();
        var D = num3.indexOf(".");
        if (D >= 0) {
          num3 = Number(num3);
          num3 = num3.toFixed(2);
        }
        setcounter(num3);
      }
    } else {
      if (x > 0) {
        setcounter(counter);
      } else {
        alert("some problem");
      }
    }
  }

  function F_DOT() {
    if (counter == 0) {
      setcounter(0 + ".");
    } else {
      setcounter(counter + ".");
    }
  }
  function F_BACK() {
    var x = counter.length;
    var z = counter.toString();
    var y = z.slice(0, x - 1);
    if (counter == 0 || counter.length == 1) {
      setcounter(0);
    } else {
      setcounter(y);
    }
  }
  function toggleSwitch() {
    setisEnabled((previousState) => !previousState);
    if (isEnabled == false) {
    }
  }
  function F_AC() {
    setcounter(0);
  }
  function F_OPR(y) {
    if (counter == 0) {
      alert("enter number first");
    } else {
      var str = counter;
      var a = str.indexOf("+");
      var s = str.indexOf("-");
      var d = str.indexOf("/");
      var m = str.indexOf("%");
      var z = str.indexOf("*");
      x = String(x);
      var x = counter.slice(-1);
      if (x == "+" || x == "-" || x == "*" || x == "/" || x == "%") {
        alert("All ready have an operator");
      } else if (a >= 0 || s >= 0 || d >= 0 || m >= 0 || z >= 0) {
        F_EQUAL();
      } else {
        if (counter == 0) {
          setcounter(0);
        } else {
          setcounter(counter + y);
        }
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "flex-start",
          backgroundColor: "#bd6b08",
          width: "100%",
        }}
      >
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch()}
          value={isEnabled}
          style={{ marginTop: 10 }}
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.container3}>{counter}</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.container6}>
          <TouchableOpacity onPress={F_AC} style={styles.container4}>
            <Text style={[styles.container5, { fontSize: 20 }]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={F_BACK} style={styles.container4}>
            <Text style={styles.container5}>B</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(x) => F_OPR("%")}
            style={styles.container4}
          >
            <Text style={styles.container5}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(x) => F_OPR("/")}
            style={styles.container4}
          >
            <Text style={styles.container5}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container6}>
          <TouchableOpacity onPress={(x) => F_NUM(7)} style={styles.container4}>
            <Text style={styles.container5}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={(x) => F_NUM(8)} style={styles.container4}>
            <Text style={styles.container5}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={(x) => F_NUM(9)} style={styles.container4}>
            <Text style={styles.container5}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(x) => F_OPR("*")}
            style={styles.container4}
          >
            <Text style={styles.container5}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container6}>
          <TouchableOpacity onPress={(x) => F_NUM(4)} style={styles.container4}>
            <Text style={styles.container5}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={(x) => F_NUM(5)} style={styles.container4}>
            <Text style={styles.container5}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={(x) => F_NUM(6)} style={styles.container4}>
            <Text style={styles.container5}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(x) => F_OPR("-")}
            style={styles.container4}
          >
            <Text style={styles.container5}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container6}>
          <TouchableOpacity onPress={(x) => F_NUM(1)} style={styles.container4}>
            <Text style={styles.container5}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={(x) => F_NUM(2)} style={styles.container4}>
            <Text style={styles.container5}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={(x) => F_NUM(3)} style={styles.container4}>
            <Text style={styles.container5}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(x) => F_OPR("+")}
            style={styles.container4}
          >
            <Text style={styles.container5}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container6}>
          <TouchableOpacity onPress={(x) => F_NUM(0)} style={styles.container7}>
            <Text style={styles.container5}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={F_DOT} style={styles.container4}>
            <Text style={styles.container5}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={F_EQUAL}
            style={[styles.container4, { backgroundColor: "#bd6b08" }]}
          >
            <Text style={styles.container5}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 3,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#bd6b08",
  },
  container2: {
    flex: 9,
    backgroundColor: "#bd6b08",
  },
  container3: {
    alignSelf: "flex-end",
    fontSize: 50,
  },

  container4: {
    height: 105,
    width: 90,
    borderWidth: 2,
    borderColor: "#7d4504",

    backgroundColor: "#824b08",
  },
  container5: {
    fontSize: 30,
    color: "white",
    alignSelf: "center",
    padding: 30,
  },
  container6: {
    flexDirection: "row",
  },
  container7: {
    height: 105,
    width: 180,
    borderWidth: 2,
    borderColor: "#7d4504",

    backgroundColor: "#824b08",
  },
});
