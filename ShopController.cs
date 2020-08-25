using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ShopController : MonoBehaviour {

    public Camera cam;
    RaycastHit hit;
    public Text PressE;
    public AudioSource buy;

    public void Update()
    {
        Ray ray = cam.ScreenPointToRay(Input.mousePosition);
        

            if (Physics.Raycast(ray, out hit) && hit.distance < 5)
            {
            if (hit.collider.CompareTag("awp") && playercontroller.instance.coins >= 900)
            {
                PressE.enabled = true;
                if (Input.GetKeyDown(KeyCode.E))
                {
                    playercontroller.instance.coins -= 900;
                    sniper.instance.ammo += 26;
                    buy.Play();
                }
            }

            if (hit.collider.CompareTag("ak") && playercontroller.instance.coins >= 600)
            { 
                PressE.enabled = true;
                if (Input.GetKeyDown(KeyCode.E))
                {
                    playercontroller.instance.coins -= 600;
                    ak74.instance.ammo += 125;
                    buy.Play();
                }
            }

            if (hit.collider.CompareTag("hayfork") && playercontroller.instance.coins >= 90)
            {
                PressE.enabled = true;
                if (Input.GetKeyDown(KeyCode.E))
                {
                    playercontroller.instance.coins -= 90;
                    hayFork.instance.clip += 20;
                    buy.Play();
                }
            }

            if (hit.collider.CompareTag("ducknate") && playercontroller.instance.coins >= 250 )
            {
                PressE.enabled = true;
                if (Input.GetKeyDown(KeyCode.E))
                {
                    playercontroller.instance.coins -= 250;
                    ducknate.instance.clip += 15;
                    buy.Play();
                }
            }

            if (hit.collider.CompareTag("minigun") && playercontroller.instance.coins >= 500)
            {
                PressE.enabled = true;
                if (Input.GetKeyDown(KeyCode.E))
                {
                    playercontroller.instance.coins -= 500;
                    machineGun.instance.ammo += 360;
                    buy.Play();
                }
            }

            if (hit.collider.CompareTag("rpg") && playercontroller.instance.coins >= 300)
            {
                PressE.enabled = true;
                if (Input.GetKeyDown(KeyCode.E))
                {
                    playercontroller.instance.coins -= 300;
                    rpg.instance.ammo += 30;
                    buy.Play();
                }
            }
        }

              else
              {
                  PressE.enabled = false;
              }
    }
}