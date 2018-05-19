/*
Created By Shalaka
 */
package com.lostsemicolon.swoop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping({"/api"})
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User create(@RequestBody User user){
        return userService.create(user);
    }

    @GetMapping(path = {"/{id}"})
    public User findOne(@PathVariable("id") int id){
        return userService.findById(id);
    }

    @PutMapping
    public User update(@RequestBody User user){
        return userService.update(user);
    }

    @DeleteMapping(path ={"/{id}"})
    public User delete(@PathVariable("id") int id) {
        return userService.delete(id);
    }

    @GetMapping
    public List<User> findAll(){
        return userService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @RequestMapping(value = "/login")
    public User findByName(@RequestParam("userName") String userName, @RequestParam("password") String password){
        return userService.findByUName(userName, password);
    }

   /* @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public User findByName(@RequestParam("userName") String userName){
        System.out.println("Username systemprint:" + userName);
        return userService.findByUName(userName);
    }*/
}