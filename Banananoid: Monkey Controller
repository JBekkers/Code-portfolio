using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonkeyController : MonoBehaviour
{
    private float death;
    public bool dieing;
    public Transform Player;
    public int MoveSpeed = 6;
    private int MaxDist = 999999;
    private int MinDist = 0;
    private int rand;


    private void Start()
    {
        dieing = false;
        Player = GameObject.FindWithTag("tree").transform;
    }
        void Update()
    {
        if (dieing == true)
        {
            death -= Time.deltaTime;
        }

        //if monkey update score times the right multiplier from the combo and roll a dice for a random extra banana ammo drop
        if (death < 0)
        {
            rand = Random.Range(0, 4);
            Destroy(gameObject);
            dieing = false;
            death = 4;
            ScoreBehavour.instance.Score += 30 + (ScoreBehavour.instance.multiplier * 70);
        }

        if (rand == 2)
        {
            GameObject powerup = Instantiate(monkeySpawner.instance.banananapowerup, transform.position + new Vector3(0,1,0), Quaternion.identity);
        }

        //move towards player
        transform.LookAt(Player);
        if (Vector3.Distance(transform.position, Player.position) >= MinDist)
        {
            transform.position += transform.forward * MoveSpeed * Time.deltaTime;
        }
    }

    private void OnCollisionEnter(Collision col)
    {
        if (col.gameObject.CompareTag("Player"))
        {
            ShootController.instance.AmmoCount -= 1;
            Destroy(gameObject);
        }

        if (col.gameObject.CompareTag("Banana"))
        {        
            death = 0.2f;
            dieing = true;
        }

        if (col.gameObject.CompareTag("Player") && ShootController.instance.AmmoCount <= 0)
        {
            playercontroller.instance.GameEnd = true;
        }
    }
}
