The JsonAPI class is the main class for the JSON API. It relies on the Connections class, the SQLRequestSender class and the classes from the org.json library. 

The method 'public String reciveAndRespond(String json)' accepts requests formatted as JSON strings. Each Request must follow a specific format. Common for all requests are the following;

- Each request must contain a request code. Request codes are numbered 0 and up.
- String values must be surrounded by singe quotes. 
- Key names must be as specified bellow


Currently supported requests and their corresponding responses are outlined below:  

## Login

## Request

```
{
 request_code: 0,
 username: 'string value',
 password: 'string value'
}
```

## Response
```
{
 user_exists: boolean, 
 password_matches: boolean
}
```

#### Registration

## Request
```
{
 request_code: 1,
 username: 'string value',
 password: 'string value'
}
```


## Response
```
{
 user_added: boolean
}
```

#### Pick-up request

## Request
```
{
 request_code: 2,
 user_id: int value,
 request_type: 0, /* request_type is different from request_code and refers to wether or not the user is looking for a pick up or a parking spot*/
 radius: int value,
 position: {
            latitude: int value
            longitude: int value
           },           
destination: {
            latitude: int value
            longitude: int value
           }
}
```


## Response
```
{
 request_added: boolean, 
 request_id: int value
}
```


#### Fetch all available `swoops` within radius

## Request
```
{
 request_code: 3, 
 latitude: 68.958360, 
 longitude: 33.116242, 
 radius: 5
}
```
## Response
```
{
 search_not_empty: boolean,
 number_of_results: int value,
 location_1:{
             latitude:68.967575,
             location_id:45,
             longitude:33.087933
            },
 location_2:{
             latitude:68.567575,
             location_id:45,
             longitude:33.0307933
            },
//etc etc etc......Should the search result return empty only 'search_not_empty: false' will be returned.             
```
