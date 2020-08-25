using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class gunSwap : MonoBehaviour
{
    public List<GameObject> guns;
    public GameObject selected;
    public float select;
    void Update()
    {
        //Debug.Log(selected);
        select += Input.mouseScrollDelta.y;
        if (select > guns.Count - 1) select -= guns.Count;
        if (select < 0f) select += guns.Count;
        selected = guns[Mathf.FloorToInt(select)];
        foreach (GameObject o in guns)
        {
            if (o == selected) o.SetActive(true);
            else o.SetActive(false);
        } 
    }
}
