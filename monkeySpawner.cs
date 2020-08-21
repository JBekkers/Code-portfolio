using UnityEngine;

public class monkeySpawner : MonoBehaviour
{
    private GameObject[] Spawnpoints;
    private GameObject[] monkeys;
    private GameObject Monkey;
    private GameObject Picked;
    public GameObject[] monkeyType;
    public GameObject banananapowerup;
    private int monkeyspawned;
    private float spawntimer;
    private int rand;
    private int rmonk;
    public int wave;


    public static monkeySpawner instance { get; private set; }
    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    private void Start()
    {
        spawntimer = 4;
        monkeyspawned = 3;
        wave = 0;
    }
    void Update()
    {
        Spawnpoints = GameObject.FindGameObjectsWithTag("Spawn");
        monkeys = (GameObject.FindGameObjectsWithTag("Monkey"));

        spawntimer -= Time.deltaTime;

        if (monkeys.Length <= 0)
        {
            for (int i = 0; i < monkeyspawned; i++)
            {
                rand = Random.Range(0, Spawnpoints.Length);
                rmonk = Random.Range(0, monkeyType.Length);
                Picked = Spawnpoints[rand];
                Monkey = monkeyType[rmonk];
                GameObject NewMonkey = Instantiate(Monkey) as GameObject;
                NewMonkey.transform.position = Picked.transform.position;
            }
            monkeyspawned++;
            wave++;
        }
    }
}