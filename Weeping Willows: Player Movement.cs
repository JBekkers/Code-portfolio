using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using UnityEngine;

public class playerBehaviour : MonoBehaviour
{
    public float walkspd;
    private float jumps;
    public float jheight;
    private Rigidbody2D rb2D;
    collect collectScript;
    private int Direction = 0; // 0 = stand still, 1 = right, 2 = left


    void Start()
    {
        walkspd = 5;
        jumps = 2;
        jheight = 5;
        rb2D = GetComponent<Rigidbody2D>();
        
        collectScript = GameObject.FindGameObjectWithTag("CollectController").GetComponent<collect>();
    }

    private void Update()
    {
        //player movement
        if (Input.GetKey(KeyCode.D))
        {
            Direction = 1;
        }

        else if (Input.GetKey(KeyCode.A))
        {
            Direction = 2;
        }
        else
        {
            Direction = 0;
        }

        //dubble jump
        if (jumps > 0 && Input.GetKeyDown(KeyCode.Space))
        {
            jumps -= 1;
            rb2D.AddForce(transform.up * jheight, ForceMode2D.Impulse);
            //Debug.Log(jumps);
        }

        //run
        if (Input.GetKey(KeyCode.LeftShift))
        {
            walkspd = 9;
        }
        else
        {
            walkspd = 6;
        }
    }

    void FixedUpdate()
    {
        //player movement
        if (Direction == 1)
        {
            transform.Translate(Vector3.right * walkspd * Time.deltaTime);
        }

        else if (Direction == 2)
        {
            transform.Translate(Vector3.left * walkspd * Time.deltaTime);
        }

    }

    private void OnCollisionEnter2D(Collision2D coll)
    {
        //if ground is touched reset jumps
        if (coll.gameObject.CompareTag("ground")) {

            //Debug.Log("ground");
            jumps = 2;
        }

        //if enemy is touched kill player
        if (coll.gameObject.CompareTag("enemy"))
        {
            transform.position = new Vector3(0, 2.5f, -9);
        }

        //if end is touched go to next game
        if (coll.gameObject.CompareTag("nxtgame"))
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        //collect items
        if (collision.gameObject.CompareTag("collect"))
        {
            collectScript.collected++;
            
            Destroy(collision.gameObject);
        }

            //end game and check if collected is 22 for special ending
            if (collision.CompareTag("endgame") && collectScript.collected == 22)
            {             
                //Debug.Log("collected all");
                 SceneManager.LoadScene("goodend");
            }
            else if (collision.CompareTag("endgame"))
            {
               // Debug.Log("less than 24");
                SceneManager.LoadScene("badend");
            }
        
    }
}
