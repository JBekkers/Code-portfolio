using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class health : MonoBehaviour
{
    public int Hp;
    public int numhearts;
    
    public Image[] hearts;
    public Sprite fullheart;
    public Sprite emptyyheart;

    void Update()
    {

        if (Hp < 1)
        {
            SceneManager.LoadScene("gameover");
        }




        //hp controller and hearts display
        if (Hp > numhearts)
        {
            Hp = numhearts;
        }

        for (int i = 0; i < hearts.Length; i++){

            if (i < Hp)
            {
                hearts[i].sprite = fullheart;
            } else{
                hearts[i].sprite = emptyyheart;
            }

            if (i < numhearts)
            {
                hearts[i].enabled = true;
            } else
            {
                hearts[i].enabled = false;
            }
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("enemy"))
        {
            transform.position = new Vector3(0, 0, 0);
            Hp--;
        }
    }
}
