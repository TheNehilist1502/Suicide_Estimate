#This is a deployment for suicidal web apk using Flask
from flask import Flask, render_template, request
import joblib
import pandas as pd
app = Flask(__name__)
# On starting to encrypt new values for model training it was realised that 
# the encryption for new single values would be hard for some labels 
# encoded in some hard algorithmic way like LabelEncoder & BinaryEncoder
# So the best way was to assign the data frame categories needed to deal with
# in a new csv file and deal with it hear to use sklearn libraries encryption
# in a direct way. 
import pandas as pd
df=pd.read_csv('F:\FCAI\Graduation project\suicide stats & social aspects.csv')
from category_encoders import BinaryEncoder
encoder1= BinaryEncoder(cols=['Country'])
encoder1.fit(df['Country'])
country_binary=encoder1.transform(df['Country'])
df1=pd.read_csv('F:\FCAI\Graduation project\website_statistics.csv')
x=df1.drop(columns=list(df.columns[29:37]))
y=df1.iloc[:,29:37]
x=pd.concat([x.iloc[:,:10],x.iloc[:,13],x.iloc[:,22],x.iloc[:,25],x.iloc[:,28]],axis=1)
from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test= train_test_split(x,y,test_size=0.2,random_state=27)
from sklearn.preprocessing import MinMaxScaler
scaler=MinMaxScaler() 
scale=scaler.fit(x_train)
model_20s=joblib.load('model_20s.pkl')
model_30s=joblib.load('model_30s.pkl')
model_40s=joblib.load('model_40s.pkl')
model_50s=joblib.load('model_50s.pkl')
model_60s=joblib.load('model_60s.pkl')
model_70s=joblib.load('model_70s.pkl')
model_80=joblib.load('model_80.pkl')
model_teens=joblib.load('model_teens.pkl')
@app.route("/")
def home():
    return render_template ('Suicide_estimate.html')

@app.route("/predict", methods=["POST"])
def predict():
    population= request.form['population']
    age_range= request.form['age_range']
    mental_hospitals= request.form['mental_hospitals']
    residential_facilities= request.form['residential_facilities']
    government_trust= request.form['government_trust']
    family= request.form['family']
    index=df[df['Country']=='%s' %(request.form['country'])].index[0]
    Country_0=country_binary.iloc[index][0]
    Country_1=country_binary.iloc[index][1]
    Country_2=country_binary.iloc[index][2]
    Country_3=country_binary.iloc[index][3]
    Country_4=country_binary.iloc[index][4]
    Country_5=country_binary.iloc[index][5]
    Country_6=country_binary.iloc[index][6]
    Country_7=country_binary.iloc[index][7]
    Country_8=country_binary.iloc[index][8]
    values=scale.transform([[Country_0,Country_1,Country_2,Country_3,Country_4,Country_5,Country_6,Country_7,Country_8,mental_hospitals,residential_facilities,family,government_trust,population]])
    if(age_range=='80 Above'):
        prediction=model_80.predict(values)[0]
    elif(age_range=='70-79'):
        prediction=model_70s.predict(values)[0]
    elif(age_range=='60-69'):
        prediction=model_60s.predict(values)[0]
    elif(age_range=='50-59'):
        prediction=model_50s.predict(values)[0]
    elif(age_range=='40-49'):
        prediction=model_40s.predict(values)[0]
    elif(age_range=='30-39'):
        prediction=model_30s.predict(values)[0]
    elif(age_range=='20-29'):
        prediction=model_20s.predict(values)[0]
    else:
        prediction=model_teens.predict(values)[0]
    
    return render_template('Suicide_estimate.html',result=prediction)
if __name__ == "__main__":
    app.run(port=5500)